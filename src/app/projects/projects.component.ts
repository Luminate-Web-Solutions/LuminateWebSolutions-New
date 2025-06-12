import { Component, OnInit } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  websiteUrl: string;
  logoType: 'sdhub' | 'aseem' | 'lagom' | 'mehdi';
  technologies?: string[];
  category?: string;
  completedDate?: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[] = [
    {
      id: 'sdhub-qutubshahi',
      title: 'SD HUB QUTUBSHAHI',
      description: 'For SD Hub Qutubshahi, we created a custom website with an integrated course management system, online application process, and mobile-friendly interface.',
      websiteUrl: 'https://sdhubqutubshahi.com',
      logoType: 'sdhub',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      category: 'Education',
      completedDate: '2023-12-15'
    },
    {
      id: 'aseem-india',
      title: 'ASEEM INDIA',
      description: 'We built a dynamic platform for ASEEM India that showcases their advocacy work and community initiatives. The site includes a resource library, donation portal, and volunteer management.',
      websiteUrl: 'https://aseemindia.org',
      logoType: 'aseem',
      technologies: ['React', 'PHP', 'MySQL', 'WordPress'],
      category: 'Non-Profit',
      completedDate: '2023-11-20'
    },
    {
      id: 'lagom-interio',
      title: 'LAGOM INTERIO',
      description: 'For Lagom Interio, We Built An Elegant Full-Width Interior Design Portfolio With High-Resolution Imagery And Project Details. The Site Features A Clean, Modern Design Perfect For Consultation Requests.',
      websiteUrl: 'https://lagominterio.com',
      logoType: 'lagom',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL'],
      category: 'Interior Design',
      completedDate: '2023-10-30'
    },
    {
      id: 'sdhub-mehdipatnam',
      title: 'SD HUB Mehdipatnam',
      description: 'For SD Hub Qutubshahi, we created a custom website with an integrated course management system, online application process, and mobile-friendly interface.',
      websiteUrl: 'https://sdhubmehdipatnam.com',
      logoType: 'mehdi',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      category: 'Education',
      completedDate: '2023-09-25'
    },
    {
      id: 'sdhub-qutubshahi',
      title: 'SD HUB QUTUBSHAHI',
      description: 'For SD Hub Qutubshahi, we created a custom website with an integrated course management system, online application process, and mobile-friendly interface.',
      websiteUrl: 'https://sdhubqutubshahi.com',
      logoType: 'sdhub',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      category: 'Education',
      completedDate: '2023-12-15'
    },
    {
      id: 'aseem-india',
      title: 'ASEEM INDIA',
      description: 'We built a dynamic platform for ASEEM India that showcases their advocacy work and community initiatives. The site includes a resource library, donation portal, and volunteer management.',
      websiteUrl: 'https://aseemindia.org',
      logoType: 'aseem',
      technologies: ['React', 'PHP', 'MySQL', 'WordPress'],
      category: 'Non-Profit',
      completedDate: '2023-11-20'
    },
    {
      id: 'lagom-interio',
      title: 'LAGOM INTERIO',
      description: 'For Lagom Interio, We Built An Elegant Full-Width Interior Design Portfolio With High-Resolution Imagery And Project Details. The Site Features A Clean, Modern Design Perfect For Consultation Requests.',
      websiteUrl: 'https://lagominterio.com',
      logoType: 'lagom',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL'],
      category: 'Interior Design',
      completedDate: '2023-10-30'
    },
    {
      id: 'sdhub-mehdipatnam',
      title: 'SD HUB Mehdipatnam',
      description: 'For SD Hub Qutubshahi, we created a custom website with an integrated course management system, online application process, and mobile-friendly interface.',
      websiteUrl: 'https://sdhubmehdipatnam.com',
      logoType: 'mehdi',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      category: 'Education',
      completedDate: '2023-09-25'
    }
  ];

  constructor() { }

  ngOnInit(): void {}

  visitWebsite(project: Project): void {
    console.log('Visiting website:', project.websiteUrl);
    // In a real application, you would open the URL
    // window.open(project.websiteUrl, '_blank');
    // For demo purposes, we'll just log the action
    alert(`Visiting ${project.title} website: ${project.websiteUrl}`);
  }

  onProjectCardClick(project: Project): void {
    console.log('Project card clicked:', project);
    // Handle project card click - could open modal with more details
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(project => project.category === category);
  }

  getAllCategories(): string[] {
    const categories = this.projects.map(project => project.category || 'Other');
    return [...new Set(categories)];
  }
}