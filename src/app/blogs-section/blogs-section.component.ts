import { Component, type OnInit } from "@angular/core"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
}

@Component({
  selector: "app-blogs-section",
  standalone: false,
  templateUrl: "./blogs-section.component.html",
  styleUrls: ["./blogs-section.component.css"],
})
export class BlogsSectionComponent implements OnInit {
  hoveredCard: number | null = null

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Helping you build smart, scalable strategies aligned with your vision and market needs.",
      excerpt:
        "Discover how modern web development practices can transform your business and create lasting digital impact.",
      category: "Web Development",
      date: "Dec 15, 2024",
      author: "John Smith",
      image: "/slider.png",
    },
    {
      id: 2,
      title: "Digital Marketing Trends That Will Shape 2025",
      excerpt: "Stay ahead of the curve with the latest digital marketing strategies and emerging technologies.",
      category: "Digital Marketing",
      date: "Dec 12, 2024",
      author: "Sarah Johnson",
      image: "/sliderr.png",
    },
    {
      id: 3,
      title: "The Future of Mobile App Development",
      excerpt: "Explore cutting-edge mobile technologies and development frameworks for next-generation apps.",
      category: "Mobile Development",
      date: "Dec 10, 2024",
      author: "Mike Chen",
      image: "/sliderrr.png",
    },
  ]

  constructor() {}

  ngOnInit(): void {
    // Component initialization
  }

  onCardHover(cardIndex: number): void {
    this.hoveredCard = cardIndex
  }

  onCardLeave(cardIndex: number): void {
    this.hoveredCard = null
  }

  onReadMore(blogId: number): void {
    console.log("Read more clicked for blog:", blogId)
    // Navigate to blog detail page or open modal
  }

  onViewAllBlogs(): void {
    console.log("View all blogs clicked")
    // Navigate to blogs listing page
  }
}
