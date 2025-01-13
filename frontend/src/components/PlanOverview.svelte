<script lang="ts">
  import { currentPlan } from '@Store/core';
  import { rightSidebarOpen, rightSidebarView } from '@Store/ui';
  import { SavePlan } from '@Controllers/TrainingPlanController';
  import WeekOverview from './WeekOverview.svelte';
  import PlanDashboard from './PlanDashboard.svelte';

  $: weeksNumbers = $currentPlan ? Array.from({ length: $currentPlan.weeks }, (_, i) => i + 1) : [];

  let saving = false;
  let saveError = '';

  async function savePlan() {
    if (saving) return;
    try {
      saving = true;
      await SavePlan($currentPlan);
      saveError = '';
    } catch (err) {
      saveError = 'Failed to save plan';
    } finally {
      saving = false;
    }
  }

  async function handlePlanSettings() {
    rightSidebarView.set('plan-settings');
    rightSidebarOpen.set(true);
  }
</script>

<div class="overview">
  {#if $currentPlan != null}
    <div class="header">
      <div class="plan-info">
        <h1>
          --- {$currentPlan.name} ---
        </h1>
        <p>
          {$currentPlan.weeks} weeks - Start: {$currentPlan.start_date}
        </p>
        {#if saveError}
          <span class="error">{saveError}</span>
        {/if}
      </div>
      <div class="button-group">
        <button on:click={handlePlanSettings}>Plan Settings</button>
        <button on:click={savePlan} disabled={saving}> Save Plan </button>
      </div>
    </div>

    <div class="content">
      <PlanDashboard />
      <div class="weeks-container">
        <div class="weeks">
          {#each weeksNumbers as week}
            <WeekOverview {week} />
          {/each}
        </div>
      </div>
    </div>
  {:else}
    <h1>No plan Selected</h1>
  {/if}
</div>

<style>
  .overview {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
  }

  .weeks-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 0.5rem;
  }

  .weeks {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
  }

  .error {
    color: red;
  }
</style>
