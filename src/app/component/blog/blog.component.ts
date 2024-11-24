import { Component } from '@angular/core';
import { blogmodel } from '../../master/store/blog/blog.model';
import { Store } from '@ngrx/store';
import { getblogselector } from '../../master/store/blog/blog.selector';
import { AppStateModel } from '../../master/store/global/appstate.model';
import { AddblogComponent } from '../addblog/addblog.component';
import { MatDialog } from '@angular/material/dialog';
import { deleteblog } from '../../master/store/blog/blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}
  bloglist!: blogmodel[];
  ngOnInit(): void {
    this.store.select(getblogselector).subscribe((data) => {
      this.bloglist = data;

      console.log(this.bloglist);
    });
  }

  addblog() {
    this.openPopup(0, 'Add Blog');
  }

  openPopup(id: any, title: any, isEdit = false) {
    console.log(title, 'in openopop');
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit,
      },
    });
  }
  editblog(id: any) {
    console.log(id, ' in edit');
    this.openPopup(id, 'Edit Blog', true);
  }

  removeBlog(id: any) {
    if (confirm('Are you sure?')) {
      this.store.dispatch(deleteblog({ id: id }));
    }
  }
}
