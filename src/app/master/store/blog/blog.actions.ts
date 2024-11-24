import { createAction, props } from '@ngrx/store';
import { blogmodel, Blogs } from './blog.model';

export const loadblog = createAction('loadblog');
export const addblog = createAction(
  'addblog',
  props<{ bloginput: blogmodel }>()
);

export const updateblog = createAction(
  'updateblog',
  props<{ bloginput: blogmodel }>()
);

export const deleteblog = createAction('deleteblog', props<{ id: number }>());
