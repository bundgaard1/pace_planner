<script lang="ts">
  import { currentPlan } from '@Store/core';
  import { rightSidebarOpen, rightSidebarView } from '@Store/ui';

  async function handlePlanSettings() {
    rightSidebarView.set('plan-settings');
    rightSidebarOpen.set(true);
  }
</script>

<div class="header">
  <div class="plan-info">
    <h1>--- {$currentPlan.name} ---</h1>
    <p>
      {$currentPlan.weeks} weeks - Start: {$currentPlan.start_date}
    </p>
  </div>
  <div class="button-group">
    <button on:click={handlePlanSettings}>Plan Settings</button>
  </div>
</div>

<style>
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
</style>
