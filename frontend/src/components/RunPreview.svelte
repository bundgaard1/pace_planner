<script lang="ts">
  import { models } from '@Models';
  import { rightSidebarOpen, rightSidebarView } from '@Store/ui';
  import { currentRun } from '@Store/core';
  import { runTypeColors, RunType } from '@Lib/run';

  export let run: models.Run;

  function openRun() {
    currentRun.set(run);
    rightSidebarOpen.set(true);
    rightSidebarView.set('run-info');
  }

  $: color = runTypeColors[run.run_type as RunType] || '#grey';

  $: completedText = run.completed ? '\u2713' : '';
</script>

<div class="preview-container" on:click={openRun} on:keydown={openRun}>
  <div style:background-color={color} class="color-bar"></div>
  <div class="infos">
    <div class="info-row">
      <b class="title">{run.title}</b>
    </div>
    <div class="info-row">
      <div class="stats">
        <span class="distance">{run.run_type} - {run.distance} km</span>
      </div>
    </div>
  </div>
  <div class="completed">
    <span>{completedText}</span>
  </div>
</div>

<style>
  .preview-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid var(--color-primary);
    gap: 8px;
  }

  .infos {
    flex: 1;
  }

  .color-bar {
    width: 10px;
  }

  .info-row {
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex: 1;
  }
</style>
