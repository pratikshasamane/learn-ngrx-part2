import { createReducer, on } from '@ngrx/store';
import { addblog, deleteblog, loadblog, updateblog } from './blog.actions';
import { initialBlogState } from './blog.state';
import { blogmodel } from './blog.model';

export function blogReducer(state: any, actions: any) {
  return _blogReducer(state, actions);
}
export const _blogReducer = createReducer(
  initialBlogState,
  on(loadblog, (state) => {
    return {
      ...state,
    };
  }),
  on(addblog, (state, actions) => {
    const _blog = { ...actions.bloginput };
    _blog.id = state.blogList.length + 1;
    return {
      ...state,
      blogList: [...state.blogList, _blog],
    };
  }),
  on(updateblog, (state, actions) => {
    const _blog = { ...actions.bloginput };
    const updatedBlog = state.blogList.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      blogList: updatedBlog,
    };
  }),
  on(deleteblog, (state, actions) => {
    const updatedList = state.blogList.filter((data: blogmodel) => {
      return data.id !== actions.id;
    });

    return {
      ...state,
      blogList: updatedList,
    };
  })
);
