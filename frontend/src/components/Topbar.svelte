<script lang="ts">
  import { currentView, leftSidebarOpen } from '@Store/ui';

  function toggleSidebar() {
    $leftSidebarOpen = !$leftSidebarOpen;
  }
</script>

<div class="topbar">
  <button class="sidebar-toggle" on:click={toggleSidebar}>
    <span class="toggle-icon">=</span>
  </button>

  <div class="nav-buttons">
    <button class:active={$currentView === 'overview'} on:click={() => ($currentView = 'overview')}>
      Overview
    </button>
  </div>
  <div>
    <h1>Pace Planner</h1>
  </div>
</div>

<style>
  .topbar {
    display: flex;
    align-items: center;
    padding: 4px;
    gap: 1rem;
    border-bottom: 1px solid var(--color-primary);
    box-shadow: 0 0 5px var(--color-primary);
  }

  .nav-buttons {
    display: flex;
    gap: 10px;
  }

  button.active {
    background-color: var(--color-primary);
    color: var(--color-background);
  }
</style>
