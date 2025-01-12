<script lang="ts">
  import { currentPlan } from '@Store/core';
  import { weekdays } from '@Lib/days';

  let todayDay = new Date().getDay() === 0 ? 7 : new Date().getDay();

  $: currentWeek = $currentPlan
    ? Math.ceil(
        (new Date().getTime() - new Date($currentPlan.start_date).getTime()) /
          (1000 * 60 * 60 * 24 * 7)
      )
    : 1;
  $: isInPlan = $currentPlan ? currentWeek >= 1 && currentWeek <= $currentPlan.weeks : false;

  $: weekRuns = $currentPlan?.runs?.filter((run) => run.week === currentWeek) ?? [];
  $: todayRuns = weekRuns.filter((run) => run.day === todayDay);

  $: nextRun = $currentPlan?.runs?.find((run) => {
    if (run.week === currentWeek) {
      return run.day > todayDay;
    }
    return run.week === currentWeek + 1;
  });
</script>

<div class="dashboard">
  {#if !isInPlan}
    <h2>Plan has not started yet</h2>
  {:else}
    <div class="dashboard-section">
      <h3>-- Todays activity --</h3>
      {#if todayRuns.length > 0}
        <div class="workouts-list">
          {#each todayRuns as run}
            <div class="workout-item">
              <b>{run.title}</b>
              <div>{run.run_type} - {run.distance}km</div>
            </div>
          {/each}
        </div>
      {:else}
        <div>No workouts scheduled for today</div>
      {/if}
    </div>

    <div class="dashboard-section">
      <h3>-- Next run --</h3>
      {#if nextRun}
        <div class="workout-item">
          <b>{nextRun.title}</b>
          <div>{nextRun.run_type} - {nextRun.distance}km</div>
          <div>Day {nextRun.day}, Week {nextRun.week}</div>
        </div>
      {:else}
        <div>No upcoming runs scheduled</div>
      {/if}
    </div>

    <div class="dashboard-section">
      <h3>-- Week Overview --</h3>
      <div class="workouts-list">
        {#each weekRuns as run}
          <div class="workout-item">
            <div style="width: 80px;">{weekdays[run.day]}</div>
            <div>{run.distance}km - {run.run_type}</div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .dashboard {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 400px;
    gap: 1rem;
  }

  .workouts-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .workout-item {
    display: flex;
    flex-direction: row;
  }
</style>
