import { writable, Writable } from 'svelte/store';
import { models } from '@Models';

export const currentPlan: Writable<models.TrainingPlan> = writable<models.TrainingPlan>();

export const currentRun = writable<models.Run>();

type RunDay = {
  day: number;
  week: number;
};

export const newRunDay = writable<RunDay>({ day: 1, week: 1 });
