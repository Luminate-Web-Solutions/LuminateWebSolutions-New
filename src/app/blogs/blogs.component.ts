import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // <-- Add this import
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';

  constructor(
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBlogs();
    this.loadCategories();
  }

  loadBlogs() {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      this.filteredBlogs = blogs;
    });
  }

  loadCategories() {
    this.blogService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onFilterChange() {
    this.filterBlogs();
  }

  onSearchChange() {
    this.filterBlogs();
  }

  filterBlogs() {
    this.blogService.searchBlogs(this.searchQuery, this.selectedCategory).subscribe(blogs => {
      this.filteredBlogs = blogs;
    });
  }

  readMore(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - new Date(date).getTime()) / (1000 * 60));
    if (diffInMinutes < 60) {
      return `${diffInMinutes} mins ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }
}