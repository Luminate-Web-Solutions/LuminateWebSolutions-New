import { Component, type OnInit } from "@angular/core"
import { Router } from "@angular/router"

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
  websiteUrl: string
  testimonial?: {
    text: string
    author: string
    position: string
  }
}

@Component({
  selector: "app-projects",
  standalone: false,
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  projectDetails: { [key: string]: ProjectDetail } = {
    "aseem-india": {
      id: "aseem-india",
      title: "ASEEM INDIA",
      client: "ASEEM India Foundation",
      duration: "4 months",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap", "Payment Gateway"],
      category: "Non-Profit Organization",
      description:
        "A comprehensive digital platform for ASEEM India Foundation focused on advocacy, legal interventions, and empowerment of marginalized communities, particularly in the Muslim community.",
      challenge:
        "ASEEM needed a platform to showcase their impact society initiatives, manage donations effectively, coordinate community programs, and provide easy access to their advocacy services while maintaining transparency in operations.",
      solution:
        "We developed a modern, responsive website with integrated donation management, community program showcases, impact reporting, and resource accessibility. The platform includes automated donation processing, community gathering coordination, and comprehensive reporting systems.",
      results: [
        "300% increase in online donations",
        "Enhanced community engagement by 250%",
        "Improved program coordination efficiency by 80%",
        "Increased volunteer participation by 180%",
      ],
      features: [
        "Donation Management System",
        "Community Program Showcase",
        "Impact Reporting Dashboard",
        "Volunteer Coordination Portal",
        "Resource Library",
        "Event Management System",
        "Newsletter Integration",
        "Multi-language Support",
      ],
      images: [
        "https://sjc.microlink.io/NWmHnE-q7hONbHl4Fw44Hjk_vLwFkl_fsoGNITXnnauxm7n8PoIK6gtOxFjFRWOu6K5xUS0N1x7xOoYnXFpVSg.jpeg",
        "/assets/projects/aseem/programs.jpg",
        "/assets/projects/aseem/impact.jpg",
      ],
      websiteUrl: "https://aseemindia.org/",
      testimonial: {
        text: "The platform has revolutionized how we connect with our community and manage our advocacy programs. The donation system and community engagement features have exceeded our expectations.",
        author: "Dr. Mohammed Ahmed",
        position: "Executive Director, ASEEM India",
      },
    },
    "xlnc-contracting": {
      id: "xlnc-contracting",
      title: "XLNC TECHNICAL SERVICES",
      client: "XLNC Technical Services LLC",
      duration: "3 months",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Stripe"],
      category: "Construction & Contracting",
      description:
        "A professional website for XLNC Technical Services LLC, showcasing their construction and contracting expertise with modern design and comprehensive service portfolios.",
      challenge:
        "XLNC needed a professional online presence that would reflect their technical expertise, showcase their construction projects, and provide easy contact methods for potential clients while highlighting their service quality.",
      solution:
        "We created a sleek, professional website with project galleries, service showcases, client testimonials, and integrated contact systems. The platform features responsive design optimized for both desktop and mobile viewing.",
      results: [
        "400% increase in project inquiries",
        "Enhanced brand credibility and professional image",
        "Improved client acquisition by 200%",
        "Reduced response time to client queries by 70%",
      ],
      features: [
        "Project Portfolio Gallery",
        "Service Showcase Pages",
        "Client Testimonials Section",
        "Contact Management System",
        "Quote Request Forms",
        "Mobile-Responsive Design",
        "SEO Optimization",
        "Social Media Integration",
      ],
      images: [
        "https://sjc.microlink.io/DUBQXG3ccxUToRNoToNGqJXqeux_E-er_Dp3mEzni0tJJUsq8rZQ_QmVfhOVrv9k1SprsGAa9PdzY1ke6sUvEQ.jpeg",
        "/assets/projects/xlnc/projects.jpg",
        "/assets/projects/xlnc/services.jpg",
      ],
      websiteUrl: "https://xlnccontracting.com/",
      testimonial: {
        text: "Our new website perfectly represents our technical capabilities and professionalism. We've seen a significant increase in high-quality project inquiries since launch.",
        author: "John Martinez",
        position: "CEO, XLNC Technical Services LLC",
      },
    },
    "speedhouse-design": {
      id: "speedhouse-design",
      title: "SPEEDHOUSE DESIGN",
      client: "Speedhouse Design Studio",
      duration: "2.5 months",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Cloudinary", "GSAP"],
      category: "Design & Architecture",
      description:
        "A cutting-edge portfolio website for Speedhouse Design, showcasing innovative architectural and interior design projects with emphasis on speed and efficiency in design delivery.",
      challenge:
        "Speedhouse Design needed a fast-loading, visually stunning website that would showcase their design portfolio while emphasizing their unique selling proposition of rapid design delivery without compromising quality.",
      solution:
        "We developed a high-performance website with optimized image loading, smooth animations, and intuitive navigation. The platform features advanced portfolio filtering, client testimonials, and streamlined consultation booking.",
      results: [
        "350% increase in consultation bookings",
        "Improved page load speed by 85%",
        "Enhanced client engagement by 220%",
        "Increased project conversion rate by 160%",
      ],
      features: [
        "High-Performance Image Gallery",
        "Advanced Portfolio Filtering",
        "Speed-Optimized Loading",
        "Consultation Booking System",
        "Client Project Tracking",
        "Mobile-First Design",
        "Animation Effects",
        "Contact Integration",
      ],
      images: [
        "/assets/projects/speedhouse/portfolio.jpg",
        "/assets/projects/speedhouse/designs.jpg",
        "/assets/projects/speedhouse/mobile.jpg",
      ],
      websiteUrl: "https://speedhousedesign.com/",
      testimonial: {
        text: "The website perfectly captures our design philosophy of speed without compromise. Our client inquiries have increased dramatically, and the booking system works flawlessly.",
        author: "Sarah Williams",
        position: "Creative Director, Speedhouse Design",
      },
    },
    "sdhub-qutubshahi": {
      id: "sdhub-qutubshahi",
      title: "SD HUB QUTUBSHAHI",
      client: "Skill Development Hub Qutubshahi",
      duration: "5 months",
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "Payment Gateway"],
      category: "Educational Platform",
      description:
        "A comprehensive skill development platform for SD Hub Qutubshahi, providing online courses, certification programs, and career development resources for students and professionals.",
      challenge:
        "SD Hub needed a scalable educational platform that could handle course management, student enrollment, progress tracking, certification processes, and payment processing while maintaining user-friendly interfaces for all stakeholders.",
      solution:
        "We built a full-featured learning management system with course creation tools, student dashboards, instructor panels, automated certification, and integrated payment processing. The platform supports multiple learning formats and assessment methods.",
      results: [
        "500% increase in course enrollments",
        "Reduced administrative workload by 75%",
        "Improved student completion rates by 90%",
        "Enhanced instructor efficiency by 85%",
      ],
      features: [
        "Learning Management System",
        "Course Creation Tools",
        "Student Progress Tracking",
        "Automated Certification",
        "Payment Processing",
        "Instructor Dashboard",
        "Mobile Learning App",
        "Analytics & Reporting",
      ],
      images: [
        "/assets/projects/sdhub-qs/dashboard.jpg",
        "/assets/projects/sdhub-qs/courses.jpg",
        "/assets/projects/sdhub-qs/mobile.jpg",
      ],
      websiteUrl: "https://sdhubqutubshahi.com/",
      testimonial: {
        text: "This platform has transformed our educational delivery. The comprehensive features and user-friendly interface have significantly improved our student engagement and course completion rates.",
        author: "Dr. Rajesh Kumar",
        position: "Director, SD Hub Qutubshahi",
      },
    },
    "eiddo-global": {
      id: "eiddo-global",
      title: "EIDDO GLOBAL",
      client: "Eiddo Global Solutions",
      duration: "4 months",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Docker"],
      category: "Global Business Solutions",
      description:
        "A comprehensive business solutions platform for Eiddo Global, providing international business consulting, market analysis, and strategic planning services to global enterprises.",
      challenge:
        "Eiddo Global required a sophisticated platform that could showcase their international expertise, provide client portals, manage complex project workflows, and facilitate global communication across different time zones and languages.",
      solution:
        "We developed a multi-language, multi-timezone platform with client portals, project management tools, real-time communication features, and comprehensive reporting systems. The platform integrates with various international business tools and APIs.",
      results: [
        "250% increase in international client acquisition",
        "Improved project delivery efficiency by 60%",
        "Enhanced client satisfaction scores by 85%",
        "Reduced communication delays by 70%",
      ],
      features: [
        "Multi-language Support",
        "Client Portal System",
        "Project Management Tools",
        "Real-time Communication",
        "International Payment Processing",
        "Document Management",
        "Analytics Dashboard",
        "API Integrations",
      ],
      images: [
        "/assets/projects/eiddo-global/dashboard.jpg",
        "/assets/projects/eiddo-global/portal.jpg",
        "/assets/projects/eiddo-global/analytics.jpg",
      ],
      websiteUrl: "https://eiddoglobal.com/",
      testimonial: {
        text: "The platform has streamlined our global operations significantly. Our international clients appreciate the multi-language support and seamless project management capabilities.",
        author: "Michael Chen",
        position: "CEO, Eiddo Global Solutions",
      },
    },
    "eiddo-power": {
      id: "eiddo-power",
      title: "EIDDO POWER",
      client: "Eiddo Power Solutions",
      duration: "3.5 months",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Redis", "Kubernetes"],
      category: "Energy & Power Solutions",
      description:
        "A specialized platform for Eiddo Power Solutions, focusing on renewable energy projects, power system analysis, and sustainable energy consulting services for industrial and commercial clients.",
      challenge:
        "Eiddo Power needed a technical platform that could handle complex energy calculations, project monitoring, client reporting, and showcase their renewable energy expertise while providing tools for energy audits and consultations.",
      solution:
        "We created a technical platform with energy calculation tools, project monitoring dashboards, client reporting systems, and consultation booking. The platform includes specialized modules for different types of energy solutions and sustainability reporting.",
      results: [
        "300% increase in energy consultation requests",
        "Improved project monitoring efficiency by 80%",
        "Enhanced client reporting accuracy by 95%",
        "Reduced energy audit processing time by 65%",
      ],
      features: [
        "Energy Calculation Tools",
        "Project Monitoring Dashboard",
        "Sustainability Reporting",
        "Client Portal",
        "Energy Audit System",
        "Consultation Booking",
        "Technical Documentation",
        "Performance Analytics",
      ],
      images: [
        "/assets/projects/eiddo-power/dashboard.jpg",
        "/assets/projects/eiddo-power/monitoring.jpg",
        "/assets/projects/eiddo-power/reports.jpg",
      ],
      websiteUrl: "https://eiddopower.com/",
      testimonial: {
        text: "The technical capabilities of this platform have elevated our service delivery. Our clients now have real-time access to their energy project data and comprehensive sustainability reports.",
        author: "Dr. Elena Rodriguez",
        position: "Technical Director, Eiddo Power Solutions",
      },
    },
    "bimqubator": {
      id: "bimqubator",
      title: "BIMQUBATOR",
      client: "BIMQubator Innovation Hub",
      duration: "4.5 months",
      technologies: ["React", "Node.js", "MongoDB", "WebGL", "Three.js"],
      category: "BIM & Construction Technology",
      description:
        "An innovative platform for BIMQubator, specializing in Building Information Modeling (BIM) services, 3D visualization, and construction technology solutions for architecture and engineering firms.",
      challenge:
        "BIMQubator needed a cutting-edge platform that could showcase 3D BIM models, provide collaborative tools for architects and engineers, manage complex construction projects, and offer training programs for BIM technology.",
      solution:
        "We developed a sophisticated platform with 3D model visualization, collaborative tools, project management features, and integrated training modules. The platform supports various BIM file formats and provides real-time collaboration capabilities.",
      results: [
        "400% increase in BIM project collaborations",
        "Improved design review efficiency by 70%",
        "Enhanced training program enrollment by 200%",
        "Reduced project coordination time by 55%",
      ],
      features: [
        "3D BIM Model Visualization",
        "Collaborative Design Tools",
        "Project Management System",
        "Training Module Platform",
        "File Format Support",
        "Real-time Collaboration",
        "Version Control System",
        "Progress Tracking",
      ],
      images: [
        "/assets/projects/bimqubator/3d-viewer.jpg",
        "/assets/projects/bimqubator/collaboration.jpg",
        "/assets/projects/bimqubator/training.jpg",
      ],
      websiteUrl: "https://bimqubator.com/",
      testimonial: {
        text: "This platform has revolutionized how we handle BIM projects. The 3D visualization and collaboration features have made our design review process incredibly efficient.",
        author: "Architect James Wilson",
        position: "Founder, BIMQubator Innovation Hub",
      },
    },
    "psf-hyderabad": {
      id: "psf-hyderabad",
      title: "PSF HYDERABAD",
      client: "Pakistan Students Federation Hyderabad",
      duration: "3 months",
      technologies: ["Vue.js", "Express.js", "MySQL", "Socket.io", "PWA"],
      category: "Student Organization Platform",
      description:
        "A comprehensive platform for Pakistan Students Federation Hyderabad, facilitating student community building, event management, academic support, and cultural activities coordination.",
      challenge:
        "PSF Hyderabad needed a platform to connect Pakistani students, manage events, coordinate academic support programs, facilitate cultural activities, and maintain communication within the student community while ensuring easy membership management.",
      solution:
        "We built a community-focused platform with membership management, event coordination, academic resource sharing, cultural activity planning, and real-time communication features. The platform includes mobile-responsive design for easy access.",
      results: [
        "350% increase in student engagement",
        "Improved event attendance by 180%",
        "Enhanced academic support coordination by 90%",
        "Increased cultural activity participation by 220%",
      ],
      features: [
        "Membership Management",
        "Event Coordination System",
        "Academic Resource Sharing",
        "Cultural Activity Planning",
        "Real-time Communication",
        "Student Directory",
        "Announcement System",
        "Mobile-Responsive Design",
      ],
      images: [
        "/assets/projects/psf/community.jpg",
        "/assets/projects/psf/events.jpg",
        "/assets/projects/psf/resources.jpg",
      ],
      websiteUrl: "https://join.psfhyd.org/",
      testimonial: {
        text: "This platform has brought our student community closer together. The event management and communication features have made organizing activities much more efficient and engaging.",
        author: "Ahmed Hassan",
        position: "President, PSF Hyderabad",
      },
    },
  }

  // Get all projects as an array for display
  get allProjects(): ProjectDetail[] {
    return Object.values(this.projectDetails)
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }

  viewProjectDetails(projectId: string): void {
    console.log("Viewing project details for:", projectId)

    // Store project data in session storage for the detail page
    const projectData = this.projectDetails[projectId]
    if (projectData) {
      sessionStorage.setItem("currentProject", JSON.stringify(projectData))

      // Navigate to project detail page
      this.router.navigate(["/project-detail", projectId])
    } else {
      console.error("Project not found:", projectId)
    }
  }

  // Method to visit actual website
  visitWebsite(websiteUrl: string, event: Event): void {
    event.stopPropagation()
    window.open(websiteUrl, "_blank")
  }

  // Method to get project data (can be used by other components)
  getProjectData(projectId: string): ProjectDetail | null {
    return this.projectDetails[projectId] || null
  }

  // Method to get all projects
  getAllProjects(): ProjectDetail[] {
    return Object.values(this.projectDetails)
  }

  // Filter projects by category
  getProjectsByCategory(category: string): ProjectDetail[] {
    return this.allProjects.filter((project) => project.category === category)
  }
}
