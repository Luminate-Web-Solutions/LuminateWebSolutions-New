import { Component, OnInit } from '@angular/core';

interface Job {
  id: number;
  title: string;
  profession: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  posted: Date;
}

@Component({
  selector: 'app-career',
  standalone: false,
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  searchTerm: string = '';
  selectedProfession: string = 'All Professions';
  isDropdownOpen: boolean = false;

  professions: string[] = [
    'All Professions',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Data Scientist',
    'DevOps Engineer',
    'Product Manager',
    'Quality Assurance',
    'Business Analyst',
    'Digital Marketing',
    'Project Manager'
  ];

  allJobs: Job[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      profession: 'Frontend Developer',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'We are looking for a skilled Frontend Developer to join our dynamic team.',
      requirements: ['React', 'TypeScript', 'CSS3', 'HTML5'],
      posted: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'Backend Developer',
      profession: 'Backend Developer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Join our backend team to build scalable server-side applications.',
      requirements: ['Node.js', 'Python', 'MongoDB', 'AWS'],
      posted: new Date('2024-01-12')
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      profession: 'UI/UX Designer',
      location: 'Remote',
      type: 'Contract',
      description: 'Create beautiful and intuitive user experiences for our products.',
      requirements: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      posted: new Date('2024-01-10')
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      profession: 'Full Stack Developer',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Work on both frontend and backend technologies in our growing startup.',
      requirements: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
      posted: new Date('2024-01-08')
    },
    {
      id: 5,
      title: 'Data Scientist',
      profession: 'Data Scientist',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Analyze complex data sets to drive business insights and decisions.',
      requirements: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
      posted: new Date('2024-01-05')
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      profession: 'DevOps Engineer',
      location: 'Seattle, WA',
      type: 'Full-time',
      description: 'Manage our cloud infrastructure and deployment pipelines.',
      requirements: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
      posted: new Date('2024-01-03')
    }
  ];

  filteredJobs: Job[] = [];

  ngOnInit() {
    this.filteredJobs = this.allJobs;
    this.selectedProfession = 'All Professions';
  }

  onSearch() {
    this.filterJobs();
  }

  onProfessionSelect(profession: string) {
    this.selectedProfession = profession;
    this.isDropdownOpen = false;
    this.filterJobs();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  private filterJobs() {
    this.filteredJobs = this.allJobs.filter(job => {
      const matchesSearch = this.searchTerm === '' || 
        job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesProfession = this.selectedProfession === 'All Professions' || 
        job.profession === this.selectedProfession;

      return matchesSearch && matchesProfession;
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.selectedProfession = 'All Professions';
    this.filteredJobs = this.allJobs;
  }

  applyForJob(jobId: number) {
    console.log('Applying for job ID:', jobId);
    // Implement application logic here
  }
}