<script lang="ts">
  import { currentRun, currentPlan } from '@Store/core';
  import { rightSidebarOpen } from '@Store/ui';

  $: run = $currentRun;

  let isEditing = false;
  let tempNotes = '';

  function startEditing() {
    tempNotes = run.notes;
    isEditing = true;
  }

  function saveNotes() {
    $currentRun = { ...$currentRun, notes: tempNotes };

    $currentPlan = {
      ...$currentPlan,
      convertValues: $currentPlan.convertValues,
      runs: $currentPlan.runs.map((r) => (r.id === run.id ? { ...r, notes: tempNotes } : r)),
    };
    isEditing = false;
  }

  function cancelEditing() {
    isEditing = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      cancelEditing();
    } else if (event.key === 'Enter' && event.ctrlKey) {
      saveNotes();
    }
  }

  function handleDelete() {
    $currentPlan = {
      ...$currentPlan,
      runs: $currentPlan.runs.filter((r) => r.id !== run.id),
      convertValues: $currentPlan.convertValues,
    };
    rightSidebarOpen.set(false);
  }

  function setCompleteStatus(status: boolean) {
    $currentRun = { ...$currentRun, completed: status };
    $currentPlan = {
      ...$currentPlan,
      runs: $currentPlan.runs.map((r) => (r.id === run.id ? { ...r, completed: status } : r)),
      convertValues: $currentPlan.convertValues,
    };
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
    <div>Notes</div>
    {#if isEditing}
      <textarea
        bind:value={tempNotes}
        rows="6"
        placeholder="Add notes..."
        on:keydown={handleKeydown}
      />
      <div class="notes-actions">
        <button on:click={saveNotes}>Save</button>
        <button on:click={cancelEditing}>Cancel</button>
      </div>
    {:else}
      <div class="notes-display" on:click={startEditing} on:keydown={startEditing}>
        <div class="notes">{run.notes || 'Click to add notes...'}</div>
      </div>
    {/if}
  </div>

  <button class="delete-btn" on:click={handleDelete}>
    <span>Delete Run</span>
  </button>
</div>

<style>
  .notes-section {
    margin: 1rem 0;
    cursor: pointer;
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

  textarea {
    width: 100%;
    resize: none;
    margin-bottom: 0.5rem;
  }

  .notes-actions {
    display: flex;
    gap: 0.5rem;
  }

  .notes-display {
    white-space: pre-wrap;
    border: 1px solid var(--color-primary);
  }

  .notes-display:hover {
    border-color: var(--color-primary);
    border-radius: 4px;
  }
</style>
