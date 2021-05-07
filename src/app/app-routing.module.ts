import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  /* http://localhost:4200/ */
  { path: '', component: PostListComponent },
  /* http://localhost:4200/create */
  { path: 'create', component: PostCreateComponent },
  /* http://localhost:4200/edit */
  { path: 'edit/:postId', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
