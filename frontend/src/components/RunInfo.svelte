<script lang="ts">
  import { currentRun, currentPlan } from '@Store/core';
  import { rightSidebarView } from '@Store/ui';

  $: run = $currentRun;

  $: runDate = (() => {
    const date = new Date($currentPlan.start_date);
    date.setDate(date.getDate() + (run.week - 1) * 7 + run.day - 1);
    return date.toDateString();
  })();

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
  <div>
    <p>{runDate}</p>
  </div>
  <div class="header">
    <h1 class="heading">{run.title}</h1>
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
    <p style="font-size: 20px;">{run.run_type} • {run.distance} km</p>
  </div>

  {#if run.notes != ''}
    <div class="notes-section">
      <label for="notes">Notes</label>
      <div class="notes-display">
        <div id="notes" class="notes">{run.notes}</div>
      </div>
    </div>
  {/if}
  <button class="edit-btn" on:click={handleEditButton}>
    <span>Edit Run</span>
  </button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 1rem;
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
    min-height: 60px;
    border: 1px solid var(--color-primary);
  }
  .edit-btn {
    margin-top: 1rem;
  }
</style>
