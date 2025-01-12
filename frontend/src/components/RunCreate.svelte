<script lang="ts">
  import { models } from '@Models';
  import { currentPlan, newRunDay, currentRun } from '@Store/core';
  import { weekdays } from '@Lib/days';
  import { rightSidebarView } from '@Store/ui';

  let title = 'Run';
  let distance = 0;
  let notes = '';

  const runTypes = ['Easy Run', 'Intervals', 'Threshold', 'Hills', 'Long run', 'Recovery', 'Race'];
  let run_type = runTypes[0];

  $: week = $newRunDay.week;
  $: day = $newRunDay.day;

  const uuid = () => Math.random().toString(36).substring(2);

  async function handleSubmit(event: Event) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const newRun: models.Run = {
      id: uuid(),
      week: week,
      day: day,
      distance: distance,
      title: title,
      notes: notes,
      run_type: run_type,
      completed: false,
    };
    // console.log('new Run', newRun);

    $currentPlan = {
      ...$currentPlan,
      runs: [...($currentPlan?.runs || []), newRun],
      convertValues: $currentPlan?.convertValues,
    };
    // console.log('current plan', $currentPlan);

    currentRun.set(newRun);
    rightSidebarView.set('run-info');
  }
</script>

<div class="create-run">
  <h2>Create New Run</h2>

  <form on:submit|preventDefault={handleSubmit} on:change={console.log}>
    <!-- TITLE -->
    <div class="form-group">
      <label for="title">Title</label>
      <input id="title" type="text" bind:value={title} required />
    </div>

    <!-- DISTANCE -->
    <div class="form-group">
      <label for="distance">Distance (km)</label>
      <input id="distance" type="number" bind:value={distance} min="0" step="0.1" required />
    </div>

    <!-- RUN TYPE -->
    <div class="form-group">
      <label for="run_type">Workout</label>
      <select id="run_type" bind:value={run_type} required>
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
        bind:value={week}
        min="1"
        max={$currentPlan?.weeks || 1}
        required
      />
    </div>

    <!-- DAY -->
    <div class="form-group">
      <label for="day">Day</label>
      <input id="day" type="text" readonly value={weekdays[day]} />
    </div>

    <!-- NOTES -->
    <div class="form-group">
      <label for="notes">Notes</label>
      <textarea id="notes" bind:value={notes} rows="4" placeholder="Notes for workout"></textarea>
    </div>

    <button type="submit">Create Run</button>
  </form>
</div>

<style>
</style>
