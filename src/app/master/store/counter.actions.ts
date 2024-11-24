import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const resetCounter = createAction('resetCounter');
export const IncrementCustom = createAction(
  'IncrementCustom',
  props<{ value: number; actionType: string }>()
);
export const rename = createAction('rename', props<{ channelname: string }>());
