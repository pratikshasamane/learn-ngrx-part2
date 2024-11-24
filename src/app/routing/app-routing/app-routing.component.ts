import { Component, NgModule } from '@angular/core';
import { CounterbtnComponent } from '../../component/counterbtn/counterbtn.component';
import { CounterdisplayComponent } from '../../component/counterdisplay/counterdisplay.component';
import { CustomincrementComponent } from '../../component/customincrement/customincrement.component';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from '../../component/counter-page/counter-page.component';
import { BlogComponent } from '../../component/blog/blog.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingComponent {}
