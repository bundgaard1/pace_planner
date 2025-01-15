<script lang="ts">
  import { contentView, leftSidebarOpen } from '@Store/ui';

  function toggleSidebar() {
    $leftSidebarOpen = !$leftSidebarOpen;
  }
</script>

<div class="topbar">
  <button class="sidebar-toggle" on:click={toggleSidebar}>
    <span class="toggle-icon">=</span>
  </button>

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
</style>
