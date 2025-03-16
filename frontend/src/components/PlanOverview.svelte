<script lang="ts">
  import { currentPlan } from '@Store/core';
  import { contentView } from '@Store/ui';
  import WeekOverview from './WeekOverview.svelte';
  import PlanDashboard from './PlanDashboard.svelte';
  import PlanHeader from './PlanHeader.svelte';

  $: weeksNumbers = $currentPlan ? Array.from({ length: $currentPlan.weeks }, (_, i) => i + 1) : [];
</script>

<div class="overview">
  {#if $currentPlan != null}
    <PlanHeader />
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
    <button
      on:click={() => {
        contentView.set('plans-list');
      }}>Select Plan</button
    >
  {/if}
</div>

<style>
  .overview {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: left;
    width: 100%;
    height: 100%;
    max-width: 1000px;
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
</style>
