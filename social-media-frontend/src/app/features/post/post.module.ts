import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    PostCreateComponent,
    PostListComponent // Example component export
  ]
})
export class PostModule { }
