import { Component, type OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"

interface ProjectDetail {
  id: string
  title: string
  client: string
  duration: string
  technologies: string[]
  category: string
  description: string
  challenge: string
  solution: string
  results: string[]
  features: string[]
  images: string[]
  testimonial?: {
    text: string
    author: string
    position: string
  }
}

@Component({
  selector: "app-project-detail",
  standalone: false,
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.css"],
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | null = null
  selectedImage: string | null = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Get project data from session storage
    const projectData = sessionStorage.getItem("currentProject")
    if (projectData) {
      this.project = JSON.parse(projectData)
    } else {
      // If no data in session storage, redirect back to projects
      this.router.navigate(["/projects"])
    }
  }

  goBack(): void {
    this.router.navigate(["/projects"])
  }

  openImageModal(image: string): void {
    this.selectedImage = image
  }

  closeImageModal(): void {
    this.selectedImage = null
  }

  contactUs(): void {
    // Navigate to contact page or open contact modal
    this.router.navigate(["/contact"])
  }

  viewMoreProjects(): void {
    this.router.navigate(["/projects"])
  }
}
