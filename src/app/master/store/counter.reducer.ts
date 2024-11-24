import { createReducer, on } from '@ngrx/store';
import { initialData } from './counter.state';
import {
  decrement,
  increment,
  IncrementCustom,
  rename,
  resetCounter,
} from './counter.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export function counterReducer(state: any, actions: any) {
  return _counterReducer(state, actions);
}

export const _counterReducer = createReducer(
  initialData,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),

  on(resetCounter, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(IncrementCustom, (state, actions) => {
    return {
      ...state,
      counter:
        actions.actionType == 'add'
          ? state.counter + actions.value
          : state.counter - actions.value,
    };
  }),

  on(rename, (state, action) => {
    return {
      ...state,
      channelname: action.channelname,
    };
  })
);
