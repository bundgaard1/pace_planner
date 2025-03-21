<script lang="ts">
  import { onMount } from 'svelte';
  import { CreateNewPlan, GetAllPlans } from '@Controllers/TrainingPlanController';
  import { models } from '@Models';
  import { currentPlan } from '@Store/core';
  import { rightSidebarOpen, leftSidebarOpen, rightSidebarView, contentView } from '@Store/ui';
  import { Writable, writable } from 'svelte/store';

  let trainingPlans: Writable<models.TrainingPlan[]> = writable([]);
  let errorMessage = '';

  // Fetch all training plans from the backend
  async function fetchPlans() {
    try {
      const response = await GetAllPlans();
      trainingPlans.set(response ?? []);
    } catch (err) {
      errorMessage = 'Failed to load training plans. Please try again.';
    }
  }

  async function createNewPlan() {
    try {
      const newPlan = await CreateNewPlan();
      if (trainingPlans === null) {
        trainingPlans = writable([newPlan]);
      } else {
        trainingPlans.update((plans) => [...plans, newPlan]);
      }
      currentPlan.set(newPlan);

      rightSidebarView.set('plan-settings');
      rightSidebarOpen.set(true);
      leftSidebarOpen.set(false);
    } catch (err) {
      errorMessage = 'Failed to create a new training plan. Please try again.';
    }
  }

  async function selectPlan(plan: models.TrainingPlan) {
    currentPlan.set(plan);
    contentView.set('overview');
  }

  onMount(fetchPlans);
</script>

<div class="container">
  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}

  <div>
    <h2>Training Plans</h2>
  </div>

  <div>
    {#if $trainingPlans == null}
      <p>The Traningplan varaible is null</p>
    {/if}

    <div class="list">
      {#each $trainingPlans as plan (plan.id)}
        <div class="training-plan">
          <div>
            <h3>{plan.name}</h3>
            <p>Weeks: {plan.weeks}</p>
            <p>Start Date: {plan.start_date}</p>
          </div>
          <div>
            <button on:click={() => selectPlan(plan)}>Select</button>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <button on:click={createNewPlan}>Create New Plan</button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .training-plan {
    flex-direction: column;
    padding: 1rem;
    border: 1px solid var(--color-primary);
  }
</style>
