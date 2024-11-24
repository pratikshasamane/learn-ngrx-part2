import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { blogmodel } from '../../master/store/blog/blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../master/store/global/appstate.model';
import { addblog, updateblog } from '../../master/store/blog/blog.actions';
import { getblogsbyid } from '../../master/store/blog/blog.selector';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css',
})
export class AddblogComponent {
  constructor(
    private dialogRef: MatDialogRef<AddblogComponent>,
    private formbuilder: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  pagetitle = '';
  editblogid = 0;
  editData!: blogmodel;
  ngOnInit() {
    console.log(this.data);

    if (this.data.isEdit) {
      this.editblogid = this.data.id;
      this.store.select(getblogsbyid(this.editblogid)).subscribe((data) => {
        this.editData = data;

        this.blogform.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description,
        });
      });
    }
    this.pagetitle = this.data.title;
  }
  clospopup() {
    this.dialogRef.close();
  }

  blogform = this.formbuilder.group({
    id: this.formbuilder.control(0),
    title: this.formbuilder.control('', Validators.required),
    description: this.formbuilder.control('', Validators.required),
  });

  saveBlog() {
    if (this.blogform.valid) {
      const _bloginput: blogmodel = {
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string,
      };

      if (this.data.isEdit) {
        _bloginput.id = this.blogform.value.id as number;
        this.store.dispatch(updateblog({ bloginput: _bloginput }));
      } else {
        this.store.dispatch(addblog({ bloginput: _bloginput }));
      }
      this.clospopup();
    }
  }
}
