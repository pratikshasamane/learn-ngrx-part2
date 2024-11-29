import { ExperimentalPendingTasks, Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import {
  ADD_BLOG_SUCCESS,
  addblog,
  addblogsuccess,
  deleteblog,
  deleteblogsuccess,
  LOAD_BLOG,
  loadblogsuccess,
  updateblog,
  updateblogsuccess,
} from './blog.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { blogmodel } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogEffects {
  constructor(private action$: Actions, private service: MasterService) {}

  _blog = createEffect(() =>
    this.action$.pipe(
      // if return is observable
      ofType(LOAD_BLOG), // type of action
      exhaustMap((action) => {
        //
        return this.service.GetAllBlogs().pipe(
          // call service and it observable so used pipe.
          map((data) => {
            return loadblogsuccess({ bloglist: data }); // actions and pass data action props.
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  _addblog = createEffect(() =>
    this.action$.pipe(
      ofType(addblog),
      exhaustMap((action) => {
        return this.service.CreateBlog(action.bloginput).pipe(
          map((data) => {
            return addblogsuccess({ bloginput: data as blogmodel });
          })
        );
      })
    )
  );

  _updateblog = createEffect(() =>
    this.action$.pipe(
      ofType(updateblog),
      exhaustMap((action) => {
        return this.service.UpdateBlog(action.bloginput).pipe(
          map(() => {
            return updateblogsuccess({ bloginput: action.bloginput });
          })
        );
      })
    )
  );

  _deleteblog = createEffect(() =>
    this.action$.pipe(
      ofType(deleteblog),
      exhaustMap((action) => {
        return this.service.DeleteBlog(action.id).pipe(
          map(() => {
            return deleteblogsuccess({ id: action.id });
          })
        );
      })
    )
  );
}
