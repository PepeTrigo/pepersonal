import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private baseUrl = 'http://www.pepetrigo.com/wp-json/wp/v2/';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<unknown> {
    return this.http.get(this.baseUrl + 'posts?_embed=true');
  }
}
