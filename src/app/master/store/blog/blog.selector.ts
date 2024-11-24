import { createFeatureSelector, createSelector } from '@ngrx/store';
import { blogmodel, Blogs } from './blog.model';

const blogselector = createFeatureSelector<Blogs>('blog');

export const getblogselector = createSelector(blogselector, (state) => {
  return state.blogList;
});

export const getblogsbyid = (blogid: number) =>
  createSelector(blogselector, (state) => {
    return state.blogList.find(
      (blog: blogmodel) => blog.id === blogid
    ) as blogmodel;
  });
