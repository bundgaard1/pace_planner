import { writable } from 'svelte/store';

type contentView = 'overview' | 'plans-list';
export const contentView = writable('overview' as contentView);

export const rightSidebarOpen = writable(false);

type RightSidebarView = 'run-info' | 'run-edit' | 'plan-settings';
export const rightSidebarView = writable('run-info' as RightSidebarView);

contentView.subscribe((value) => {
  rightSidebarOpen.set(false);
});

export const leftSidebarOpen = writable(false);
