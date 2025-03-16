<script lang="ts">
  import { contentView } from '@Store/ui';
</script>

<div class="container">
  <div class="nav-buttons">
    <button class:active={$contentView === 'overview'} on:click={() => contentView.set('overview')}>
      Overview</button
    >
    <button
      class:active={$contentView === 'analytics'}
      on:click={() => contentView.set('analytics')}
    >
      Analytics
    </button>
    <button
      class:active={$contentView === 'plans-list'}
      on:click={() => contentView.set('plans-list')}
    >
      Plans
    </button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .nav-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button.active {
    background-color: var(--color-primary);
    color: var(--color-background);
  }
</style>
