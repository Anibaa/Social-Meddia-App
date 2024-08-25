import { Component } from '@angular/core';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  postText: string = '';
  isPosting: boolean = false;
  maxCharacters: number = 400;
  remainingCharacters: number = this.maxCharacters;

  constructor(private postService: PostService) {}

  createPost() {
    if (this.postText.trim()) {
      this.isPosting = true;
      this.postService.createPost(this.postText).subscribe({
        next: () => {
          this.isPosting = false;
          this.postText = ''; 
          this.remainingCharacters = this.maxCharacters;
        },
        error: () => {
          this.isPosting = false;
          alert('An error occurred while creating the post.');
        }
      });
    } else {
      alert('Post content cannot be empty.');
    }
  }

  onTextInput() {
    this.remainingCharacters = this.maxCharacters - this.postText.length;
  }

  addImage() {
    alert('Image feature is not implemented yet.');
  }

  addEmoji() {
    alert('Emoji feature is not implemented yet.');
  }
}
