<script lang="ts">
  import { currentPlan, currentRun } from '@Store/core';
  import { weekdays } from '@Lib/days';
  import { runTypes } from '@Lib/run';
  import { models } from '@Models';
  import { rightSidebarOpen, rightSidebarView } from '@Store/ui';

  let editedRun: models.Run = $currentRun;

  async function handleSubmit(event: Event) {
    event.preventDefault();
    currentRun.set(editedRun);

    currentPlan.update((plan) => ({
      ...plan,
      runs: plan.runs.map((run) => (run.id === editedRun.id ? editedRun : run)),
      convertValues: plan.convertValues,
    }));

    rightSidebarView.set('run-info');
  }

  function handleDelete() {
    currentRun.set(null);
    currentPlan.update((plan) => ({
      ...plan,
      runs: plan.runs.filter((r) => r.id !== editedRun.id),
      convertValues: plan?.convertValues,
    }));

    rightSidebarOpen.set(false);
  }
</script>

<div class="run-edit">
  <div class="content">
    <h2>Edit run</h2>

    <form on:submit|preventDefault={handleSubmit} on:change={console.log}>
      <!-- TITLE -->
      <div class="form-group">
        <label for="title">Title</label>
        <input id="title" type="text" bind:value={editedRun.title} required />
      </div>

      <!-- DISTANCE -->
      <div class="form-group">
        <label for="distance">Distance (km)</label>
        <input
          id="distance"
          type="number"
          bind:value={editedRun.distance}
          min="0"
          step="0.1"
          required
        />
      </div>

      <!-- RUN TYPE -->
      <div class="form-group">
        <label for="run_type">Workout</label>
        <select id="run_type" bind:value={editedRun.run_type} required>
          {#each runTypes as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </div>

      <!-- Week -->
      <div class="form-group">
        <label for="week">Week</label>
        <input
          id="week"
          type="number"
          bind:value={editedRun.week}
          min="1"
          max={$currentPlan?.weeks || 1}
          required
        />
      </div>

      <!-- DAY -->
      <div class="form-group">
        <label for="day">Day</label>
        <input id="day" type="text" readonly value={weekdays[editedRun.day]} />
      </div>

      <!-- NOTES -->
      <div class="form-group">
        <label for="notes">Notes</label>
        <textarea id="notes" bind:value={editedRun.notes} rows="4" placeholder="Notes for workout"
        ></textarea>
      </div>

      <button type="submit">Save Run</button>
    </form>
  </div>

  <div class="bottom">
    <button on:click={handleDelete}> Delete Run </button>
  </div>
</div>

<style>
  .run-edit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content {
    flex-grow: 1;
  }
</style>
