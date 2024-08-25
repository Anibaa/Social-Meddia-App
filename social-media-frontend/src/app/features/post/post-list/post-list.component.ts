import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostService, Post } from '../../../core/services/post.service';
import { ActivatedRoute } from '@angular/router';

interface ShowMoreComments {
  [key: string]: boolean;
}


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnChanges {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  mostLikedPosts: Post[] = [];
  filteredMostLikedPosts: Post[] = [];
  showMoreComments: ShowMoreComments = {};
  commentInput: { [key: string]: string } = {};
  postSuccess: boolean = false;
  newPostText: string = '';
  isLoading: boolean = false;
  
  @Input() searchTerm: string = '';
  constructor(private postService: PostService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
      this.loadPosts();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.updateFilteredPosts();
    }
  }

  loadPosts(): void {
    this.isLoading = true;
    this.postService.getPosts().subscribe(posts => {
      console.log('Posts loaded:', posts); 
      this.posts = posts;
      this.posts.forEach(post=> post.authorName="Username1")
      this.posts.forEach(post => {
        post.comments.forEach(comment => comment.authorName = "Username2");
      });

      this.mostLikedPosts = this.posts.filter(post => post.likes > 5);
      this.filteredPosts = [...this.posts];
      this.filteredMostLikedPosts = [...this.mostLikedPosts];
      this.posts.forEach(post => this.commentInput[post._id || ''] = '');
      this.isLoading = false;
      this.updateFilteredPosts();
    });
  }

  createPost(): void {
    if (this.newPostText.trim()) {
      this.isLoading = true;
      this.postService.createPost(this.newPostText).subscribe(() => {
        this.newPostText = '';
        this.postSuccess = true;
        setTimeout(() => this.postSuccess = false, 3000);
        this.loadPosts();
      });
    }
  }

  onLikePost(post: Post): void {
    this.postService.likePost(post._id).subscribe(() => {
      post.likes++;
      this.updateFilteredPosts();
    });
  }

  onAddComment(post: Post): void {
    if (this.commentInput[post._id || ''].trim()) {
      this.postService.addComment(post._id, this.commentInput[post._id || '']).subscribe(() => {
        this.commentInput[post._id || ''] = '';
        this.loadPosts();
      });
    }
  }

  toggleComments(post: Post): void {
    this.showMoreComments[post._id] = !this.showMoreComments[post._id];
  }

  updateFilteredPosts(): void {
    this.filteredPosts = this.posts.filter(post =>
      post.text.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.filteredMostLikedPosts = this.mostLikedPosts.filter(post =>
      post.text.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
