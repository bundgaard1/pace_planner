<script lang="ts">
  import { models } from '@Models';
  import { rightSidebarOpen, rightSidebarView } from '@Store/ui';
  import { currentRun } from '@Store/core';

  export let run: models.Run;

  function openRun() {
    currentRun.set(run);
    rightSidebarOpen.set(true);
    rightSidebarView.set('run-info');
  }
</script>

<div class="preview-container" on:click={openRun} on:keydown={openRun}>
  <div class="info-row">
    <div>{run.title}</div>
    <div>{run.distance} km</div>
    {#if run.completed}
      <div class="checkmark">✓</div>
    {/if}
  </div>
</div>

<style>
  .preview-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  .checkmark {
    color: #4caf50;
    font-weight: bold;
  }
</style>
