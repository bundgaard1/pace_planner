<script lang="ts">
  import {
    currentView,
    leftSidebarOpen,
    rightSidebarOpen,
    rightSidebarView,
    leftSidebarView,
  } from '@Store/ui';

  import PlansList from './components/PlansList.svelte';
  import PlanOverview from './components/PlanOverview.svelte';
  import RunInfo from './components/RunInfo.svelte';
  import CreateRun from './components/RunCreate.svelte';
  import PlanSettings from './components/PlanSettings.svelte';
</script>

<div class="home-container">
  {#if $leftSidebarOpen}
    <div class="left-sidebar">
      <button class="close-button" on:click={() => ($leftSidebarOpen = false)}>x</button>
      {#if $leftSidebarView === 'plan-list'}
        <PlansList />
      {/if}
    </div>
  {/if}

  <div class="center-content">
    {#if $currentView === 'overview'}
      <PlanOverview />
    {:else}
      <h1>No view selected</h1>
    {/if}
  </div>

  {#if $rightSidebarOpen}
    <div class="right-sidebar">
      <button class="close-button" on:click={() => ($rightSidebarOpen = false)}>x</button>
      {#if $rightSidebarView === 'run-info'}
        <RunInfo />
      {:else if $rightSidebarView === 'run-create'}
        <CreateRun />
      {:else if $rightSidebarView === 'plan-settings'}
        <PlanSettings />
      {/if}
    </div>
  {/if}
</div>

<style>
  .home-container {
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-direction: row;
  }

  .left-sidebar {
    flex: 0 0 300px;
    padding: 20px;
    border-right: 1px solid var(--color-primary);
    box-shadow: 2px 0 5px color-mix(in srgb, var(--color-primary) 50%, transparent);
  }

  .right-sidebar {
    position: relative;
    flex: 0 0 300px;
    padding: 20px;
    border-left: 1px solid var(--color-primary);
    box-shadow: -2px 0 5px color-mix(in srgb, var(--color-primary) 50%, transparent);
  }

  .center-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
</style>
