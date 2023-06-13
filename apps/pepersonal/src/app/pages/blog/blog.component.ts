import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: any;
  message: any;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getAllPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
        console.log('Posts => ', this.posts);
      },
      error: (err: HttpErrorResponse) => {
        if (err instanceof Error) {
          this.message = `An error ocurred ${err.error.message}`;
        } else {
          this.message = `Server returned error code ${err.status} - message was ${err.message}`;
        }
      },
      complete: () => console.log('All projects fetched'),
    });
  }
}
