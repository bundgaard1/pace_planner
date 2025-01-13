import { models } from '@Models';
import { currentRun, currentPlan } from '@Store/core';
import { rightSidebarView, rightSidebarOpen } from '@Store/ui';

const uuid = () => Math.random().toString(36).substring(2);

export const runTypes = [
  'Easy Run',
  'Intervals',
  'Threshold',
  'Hills',
  'Long run',
  'Recovery',
  'Race',
];

export function addRunToPlan(day, week) {
  const newRun: models.Run = {
    id: uuid(),
    week: week,
    day: day,
    distance: 0,
    title: 'Run',
    notes: '',
    run_type: runTypes[0],
    completed: false,
  };

  currentPlan.update((plan) => ({
    ...plan,
    runs: [...(plan?.runs || []), newRun],
    convertValues: plan?.convertValues,
  }));

  currentRun.set(newRun);

  rightSidebarView.set('run-edit');
  rightSidebarOpen.set(true);
}
