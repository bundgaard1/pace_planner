import { writable } from 'svelte/store';

export const currentView = writable('overview');

export const leftSidebarOpen = writable(false);

export const rightSidebarOpen = writable(false);

type rightSidebarView = 'run-info' | 'run-create' | 'plan-settings';
export const rightSidebarView = writable('run-info' as rightSidebarView);

type leftSidebarView = 'plan-list';
export const leftSidebarView = writable('plan-list' as leftSidebarView);
