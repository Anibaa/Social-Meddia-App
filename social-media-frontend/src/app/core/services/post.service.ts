import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  _id: string;
  text: string;
  likes: number;
  authorName: string;
  authorInitials: string;
  comments: { text: string, date: string, authorName:string, authorInitials:string }[];
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(text: string): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, { text });
  }

  likePost(id: string): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}/like`, {});
  }

  addComment(id: string, comment: string): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}/comment`, { comment });
  }
}
