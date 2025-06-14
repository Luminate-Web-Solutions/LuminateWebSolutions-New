import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog | undefined;
  relatedBlogs: Blog[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const blogId = +params['id'];
      this.loadBlog(blogId);
      this.loadRelatedBlogs(blogId);
    });
  }

  loadBlog(id: number) {
    this.blogService.getBlogById(id).subscribe(blog => {
      this.blog = blog;
    });
  }

  loadRelatedBlogs(currentBlogId: number) {
    this.blogService.getBlogs().subscribe(blogs => {
      this.relatedBlogs = blogs
        .filter(blog => blog.id !== currentBlogId)
        .slice(0, 3);
    });
  }

  navigateToBlog(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }

  goBack() {
    this.router.navigate(['/blogs']);
  }
}