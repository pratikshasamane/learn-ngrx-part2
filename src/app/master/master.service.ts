import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogmodel } from './store/blog/blog.model';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  GetAllBlogs(): Observable<blogmodel[]> {
    return this.http.get<blogmodel[]>('http://localhost:3000/Blogs');
  }

  CreateBlog(bloginput: blogmodel) {
    return this.http.post('http://localhost:3000/Blogs', bloginput).pipe(
      tap(() => {
        return this.http.get<blogmodel>(
          'http://localhost:3000/Blogs?limit=1&sort=id&order=desc'
        );
      })
    );
  }

  UpdateBlog(bloginput: blogmodel) {
    return this.http.put(
      'http://localhost:3000/Blogs/' + bloginput.id,
      bloginput
    );
  }

  DeleteBlog(blogid: number) {
    return this.http.delete('http://localhost:3000/Blogs/' + blogid);
  }
}
