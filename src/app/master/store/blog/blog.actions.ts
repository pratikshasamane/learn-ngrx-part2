import { createAction, props } from '@ngrx/store';
import { blogmodel, Blogs } from './blog.model';
// ********************************

export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const loadblogsuccess = createAction(
  LOAD_BLOG_SUCCESS,
  props<{ bloglist: blogmodel[] }>()
); // props is API response getting from effects
// ********************************

export const LOAD_BLOG = '[blog page] load blog';
export const loadblog = createAction(LOAD_BLOG);
// ********************************

export const ADD_BLOG_SUCCESS = '[blog page] add blog success';
export const addblogsuccess = createAction(
  ADD_BLOG_SUCCESS,
  props<{ bloginput: blogmodel }>()
);
// ********************************
export const ADD_BLOG = '[blog page] add blog';
export const addblog = createAction(
  ADD_BLOG,
  props<{ bloginput: blogmodel }>()
);
// ********************************

export const UPDATE_BLOG = '[blog page] update blog';
export const updateblog = createAction(
  UPDATE_BLOG,
  props<{ bloginput: blogmodel }>()
);
// ********************************

export const UPDATE_BLOG_SUCESS = '[blog page] update blog success';

export const updateblogsuccess = createAction(
  UPDATE_BLOG_SUCESS,
  props<{ bloginput: blogmodel }>()
);
// ********************************

export const DELETE_BLOG = '[blog page] delete blog';
export const deleteblog = createAction(DELETE_BLOG, props<{ id: number }>());
// ********************************

export const DELETE_BLOG_SUCCESS = '[blog page] delete blog success';
export const deleteblogsuccess = createAction(
  DELETE_BLOG_SUCCESS,
  props<{ id: number }>()
);
