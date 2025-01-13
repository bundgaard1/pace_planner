<script lang="ts">
  import { currentRun, currentPlan } from '@Store/core';
  import { rightSidebarView } from '@Store/ui';

  $: run = $currentRun;

  function handleEditButton() {
    rightSidebarView.set('run-edit');
  }

  function setCompleteStatus(status: boolean) {
    currentRun.update((r) => ({ ...r, completed: status }));

    currentPlan.update((plan) => ({
      ...plan,
      runs: plan.runs.map((r) => (r.id === run.id ? { ...r, completed: status } : r)),
      convertValues: plan.convertValues,
    }));
  }
</script>

<div class="container">
  <div class="header">
    <h2 class="heading">{run.title}</h2>
    <label class="checkbox-wrapper">
      <input
        type="checkbox"
        class="checkbox"
        checked={run.completed}
        on:change={(e) => setCompleteStatus(!run.completed)}
      />
    </label>
  </div>

  <div class="run-info">
    <p>{run.run_type} • {run.distance} km</p>
  </div>

  <div class="notes-section">
    <h4>Notes</h4>
    <div class="notes-display">
      <div class="notes">{run.notes || 'no notes...'}</div>
    </div>
  </div>
  <button class="delete-btn" on:click={handleEditButton}>
    <span>Edit Run</span>
  </button>
</div>

<style>
  .notes-section {
    margin: 1rem 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .checkbox {
    width: 24px;
    height: 24px;
  }

  .notes-display {
    white-space: pre-wrap;
    border: 1px solid var(--color-primary);
  }
</style>
