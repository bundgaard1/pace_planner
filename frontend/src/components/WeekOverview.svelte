<script lang="ts">
  import { currentPlan, newRunDay } from '@Store/core';
  import { weekdaysShort } from '@Lib/days';
  import RunPreview from './RunPreview.svelte';
  import { addRunToPlan } from '@Lib/run';
  import { formatDate } from '@Lib/days';

  export let week: number;
  let isOpen = false;

  function toggleOpen() {
    isOpen = !isOpen;
  }

  $: weekRuns = $currentPlan.runs
    ? $currentPlan.runs.filter((workout) => workout.week === week)
    : [];

  $: workoutsByDay = Object.entries(weekdaysShort).map(([dayNum, dayName]) => ({
    day: dayName,
    dayNumber: parseInt(dayNum),
    workouts: weekRuns.filter((w) => w.day === parseInt(dayNum)),
  }));

  $: weekTotal = weekRuns.reduce((sum, run) => sum + (run.distance || 0), 0).toFixed(0);
  $: weekCompleted = weekRuns.reduce((sum, run) => sum + (run.completed ? run.distance : 0), 0);

  $: weekRangeString = (() => {
    if (!$currentPlan?.start_date) return '';
    const startDate = new Date($currentPlan.start_date);
    const weekStart = new Date(startDate);
    weekStart.setDate(startDate.getDate() + (week - 1) * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    return `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
  })();

  $: isThisWeek = (() => {
    const today = new Date();
    const startDate = new Date($currentPlan.start_date);
    const weekStart = new Date(startDate);
    weekStart.setDate(startDate.getDate() + (week - 1) * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    return today >= weekStart && today <= weekEnd;
  })();

  function openNewRunModal(day: number) {
    addRunToPlan(day, week);
  }
</script>

<div class="week-overview">
  <div
    class="week-header"
    class:this-week={isThisWeek}
    on:click={toggleOpen}
    tabindex={week}
    on:keypress={toggleOpen}
    role="button"
  >
    <div class="week-title">
      <span class="week-dates">{weekRangeString}</span>
      <span class="week-number">Week {week}</span>
      <span class="week-total">Total: {weekCompleted}/{weekTotal} km</span>
    </div>
    <span class="arrow" class:open={isOpen}>▼</span>
  </div>

  {#if isOpen}
    <div class="week-content">
      {#each workoutsByDay as { day, workouts, dayNumber }, i}
        <div class="day-row" class:is-today={isThisWeek && new Date().getDay() === dayNumber}>
          <div class="day-name">{day}</div>
          <div class="day-runs">
            {#each workouts as workout}
              <div class="run-preview">
                <RunPreview run={workout} />
              </div>
            {/each}
            {#if workouts.length < 2}
              <button class="add-run" on:click={() => openNewRunModal(dayNumber)}>+ Add Run</button>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .week-overview {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid var(--color-primary);
    box-shadow: 0 2px 4px color-mix(in srgb, var(--color-primary) 50%, transparent);
    width: 100%;
  }

  .week-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }
  .this-week {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .is-today {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .week-title {
    display: flex;
    gap: 20px;
    align-items: baseline;
  }

  .week-dates {
    width: 140px;
    font-weight: bold;
  }

  .week-number {
    width: 80px;
  }

  .day-row {
    display: flex;
    align-items: center;
    padding: 8px;
    border-top: 1px solid var(--color-primary);
  }

  .day-name {
    min-width: 50px;
    text-align: center;
    padding-right: 15px;
    font-weight: bold;
  }

  .day-runs {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .run-preview,
  .add-run {
    width: 100%;
  }

  .day-runs button {
    flex: 1;
    min-width: 0;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .add-run {
    flex: 1;
    border: 0px;
    color: rgb(91, 91, 91);
    padding: 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }
</style>
