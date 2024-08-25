import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'Aniba Yassine',
    email: 'anibayassine@ieee.org',
    bio: 'Full-stack developer with a passion for creating beautiful and functional web applications.',
    profilePictureUrl: 'https://via.placeholder.com/150',
    posts: [
      {
        id: 1,
        text: 'This is my first post!',
        date: new Date(),
        likes: 10
      },
      {
        id: 2,
        text: 'Loving Angular so far!',
        date: new Date(),
        likes: 25
      }
    ]
  };

  constructor() {}

  ngOnInit(): void {

  }

  onLikePost(post: any): void {
    post.likes += 1;
  }
}
