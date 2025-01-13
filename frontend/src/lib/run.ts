import { models } from '@Models';
import { currentRun, currentPlan } from '@Store/core';
import { rightSidebarView, rightSidebarOpen } from '@Store/ui';

const uuid = () => Math.random().toString(36).substring(2);

export enum RunType {
  EASY = 'Easy Run',
  INTERVALS = 'Intervals',
  THRESHOLD = 'Threshold',
  HILLS = 'Hills',
  LONG = 'Long run',
  Recovery = 'Recovery',
  RACE = 'Race',
}

export const runTypeColors = {
  [RunType.EASY]: '#0099ff',
  [RunType.INTERVALS]: '#ffcc00',
  [RunType.THRESHOLD]: '#99ccff',
  [RunType.HILLS]: '#339933',
  [RunType.LONG]: '#cc33ff',
  [RunType.Recovery]: '#00cc66',
  [RunType.RACE]: '#ff3300',
};

export function addRunToPlan(day, week) {
  const newRun: models.Run = {
    id: uuid(),
    week: week,
    day: day,
    distance: 0,
    title: 'Run',
    notes: '',
    run_type: RunType.EASY,
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
