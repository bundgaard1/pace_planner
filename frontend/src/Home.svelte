<script lang="ts">
  import { contentView, leftSidebarOpen, rightSidebarOpen, rightSidebarView } from '@Store/ui';

  import PlansList from './components/PlansList.svelte';
  import PlanOverview from './components/PlanOverview.svelte';
  import RunInfo from './components/RunInfo.svelte';
  import RunEdit from './components/RunEdit.svelte';
  import PlanSettings from './components/PlanSettings.svelte';
  import Navbar from './components/Navbar.svelte';
</script>

<div class="home-container">
  {#if $leftSidebarOpen}
    <div class="left-sidebar">
      <Navbar />
    </div>
  {/if}

  <div class="center-content">
    {#if $contentView === 'overview'}
      <PlanOverview />
    {:else if $contentView === 'plans-list'}
      <PlansList />
    {:else}
      <h1>No view selected</h1>
    {/if}
  </div>

  {#if $rightSidebarOpen}
    <div class="right-sidebar">
      <button class="close-button" on:click={() => ($rightSidebarOpen = false)}>x</button>
      {#if $rightSidebarView === 'run-info'}
        <RunInfo />
      {:else if $rightSidebarView === 'run-edit'}
        <RunEdit />
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
    flex: 0 0 200px;
    padding: 20px;
    border-right: 1px solid var(--color-primary);
    box-shadow: 2px 0 5px color-mix(in srgb, var(--color-primary) 50%, transparent);
  }

  .right-sidebar {
    position: relative;
    flex: 0 0 400px;
    height: 100%;
    padding: 20px;
    border-left: 1px solid var(--color-primary);
    box-shadow: -2px 0 5px color-mix(in srgb, var(--color-primary) 50%, transparent);
  }

  .center-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
  }
</style>
