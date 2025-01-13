import { writable, Writable } from 'svelte/store';
import { models } from '@Models';
import { SavePlan } from '@Controllers/TrainingPlanController';

export const currentPlan: Writable<models.TrainingPlan> = writable<models.TrainingPlan>();

let saving = false;
let saveError = '';

currentPlan.subscribe(async ($currentPlan) => {
  if (saving) return;
  if (!$currentPlan) return;
  try {
    saving = true;
    await SavePlan($currentPlan);
    saveError = '';
  } catch (err) {
    saveError = 'Failed to save plan';
    saving = true;
  } finally {
    saving = false;
  }
});

export const currentRun = writable<models.Run>();

type RunDay = {
  day: number;
  week: number;
};

export const newRunDay = writable<RunDay>({ day: 1, week: 1 });
