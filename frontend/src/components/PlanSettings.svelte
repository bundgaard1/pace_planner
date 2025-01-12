<script lang="ts">
  import { currentPlan } from '@Store/core';
  import { DeletePlan } from '@Controllers/TrainingPlanController';
  import { rightSidebarOpen } from '@Store/ui';

  let editedPlan = {
    name: $currentPlan.name,
    start_date: $currentPlan.start_date,
    weeks: $currentPlan.weeks,
    description: $currentPlan.description,
  };

  function handleSubmit() {
    $currentPlan = {
      ...$currentPlan,
      ...editedPlan,
      convertValues: $currentPlan.convertValues,
    };
  }

  async function deleteThisPlan() {
    try {
      await DeletePlan($currentPlan.id);
      rightSidebarOpen.set(false);
      $currentPlan = null;
    } catch (err) {
      console.log(err);
    }
  }
</script>

<div class="container">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="name">Plan Name</label>
      <input type="text" id="name" bind:value={editedPlan.name} required />
    </div>

    <div class="form-group">
      <label for="weeks">Weeks</label>
      <input type="number" id="weeks" bind:value={editedPlan.weeks} min="1" max="24" required />
    </div>

    <div class="form-group">
      <label for="start_date">Start Date</label>
      <input type="date" id="start_date" bind:value={editedPlan.start_date} required />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" bind:value={editedPlan.description} rows="4"></textarea>
    </div>

    <button type="submit">Save Changes</button>
  </form>
  <button on:click={() => deleteThisPlan()}>Delete</button>
</div>

<style>
</style>
