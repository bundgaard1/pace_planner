<script lang="ts">
  import { onMount } from "svelte";
  import {CreateNewPlan, GetAllPlans, DeletePlan} from "@Controllers/TrainingPlanController";
  import {models} from "@Models";

  let trainingPlans : models.TrainingPlan[] = [];
  let errorMessage = "";

  // Fetch all training plans from the backend
  async function fetchPlans() {
    try {
      const response = await GetAllPlans();
      trainingPlans = response;
    } catch (err) {
      errorMessage = "Failed to load training plans. Please try again.";
    }
  }

  async function createNewPlan() {
    try {
      await CreateNewPlan()
    } catch (err) {
      errorMessage = "Failed to create a new training plan. Please try again.";
    }
    await fetchPlans();
  }

  async function deletePlan(id: string) {
    try {
      await DeletePlan(id);
      trainingPlans = trainingPlans.filter(plan => plan.id !== id);
    } catch (err) {
      errorMessage = "Failed to delete the training plan. Please try again.";
    }
  }

  onMount(fetchPlans);
</script>



<div>
  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}

  <div>
    <h2>Training Plans</h2>
    {#each trainingPlans as plan (plan.id)}
      <div class="training-plan">
        <div>
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
        </div>
        <button on:click={() => deletePlan(plan.id)}>Delete</button>
      </div>
    {/each}
  </div>
  <button on:click={createNewPlan}>Create New Plan</button>
</div>

<style>
  .error {
    color: red;
    margin-bottom: 10px;
  }
  .training-plan {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .training-plan :hover {
    background-color: #f9f9f9;
  }

</style>