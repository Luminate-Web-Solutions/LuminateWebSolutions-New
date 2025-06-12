import { Component, OnInit } from '@angular/core';

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'development' | 'marketing';
  pricing?: string[];
  features?: string[];
  icon?: string;
}

@Component({
  selector: 'app-solutions',
  standalone: false,
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  activeTab: 'development' | 'marketing' = 'development';

  services: Service[] = [
    {
      id: 'erp-software',
      title: 'ERP SOFTWARE DEVELOPMENT',
      description: 'ERP software connects inventory, finances, HR, and operations, boosting efficiency. Custom-built for any business, it streamlines operations and enhances productivity.',
      category: 'development',
      features: ['Inventory Management', 'Financial Integration', 'HR Management', 'Operations Streamlining']
    },
    {
      id: 'crm',
      title: 'CUSTOMER RELATIONSHIP MANAGEMENT',
      description: 'ERP software connects inventory, finances, HR, and operations. Custom-built for any business, it streamlines operations to simplify operations.',
      category: 'development',
      pricing: ['233.57', '315.33'],
      features: ['Customer Data Management', 'Sales Pipeline', 'Communication Tracking', 'Analytics & Reporting']
    },
    {
      id: 'social-media-branding',
      title: 'SOCIAL MEDIA BRANDING',
      description: 'Social media branding crafts your online identity with consistent visuals and voice. Builds your audience and boosts engagement across platforms.',
      category: 'development',
      features: ['Brand Identity Design', 'Content Strategy', 'Visual Consistency', 'Audience Engagement']
    },
    {
      id: 'whatsapp-marketing',
      title: 'WHAT\'S APP MARKETING',
      description: 'A fast, direct way to connect with customers through messages, updates, offers, and support right on their phones.',
      category: 'development',
      features: ['Direct Messaging', 'Broadcast Lists', 'Customer Support', 'Automated Responses']
    },
    {
      id: 'custom-app',
      title: 'CUSTOM APP DEVELOPMENT',
      description: 'We build custom, user-friendly mobile apps that help your customers connect with your brand and all in one seamless experience.',
      category: 'development',
      features: ['iOS Development', 'Android Development', 'Cross-platform Solutions', 'UI/UX Design']
    },
    {
      id: 'maintenance',
      title: 'WEBSITE / APP MAINTENANCE',
      description: 'Keep your website and apps running smoothly with regular updates, security checks, and performance optimization.',
      category: 'development',
      features: ['Regular Updates', 'Security Monitoring', 'Performance Optimization', '24/7 Support']
    },
    {
      id: 'seo',
      title: 'SEARCH ENGINE OPTIMIZATION',
      description: 'Boost your website\'s visibility on search engines with our comprehensive SEO strategies and techniques.',
      category: 'marketing',
      features: ['Keyword Research', 'On-page Optimization', 'Link Building', 'Technical SEO']
    },
    {
      id: 'ppc',
      title: 'PAY-PER-CLICK ADVERTISING',
      description: 'Drive targeted traffic to your website with strategic PPC campaigns across Google Ads and social platforms.',
      category: 'marketing',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'ROI Optimization']
    },
    {
      id: 'content-marketing',
      title: 'CONTENT MARKETING',
      description: 'Create engaging, valuable content that attracts and retains customers while building brand authority.',
      category: 'marketing',
      features: ['Content Strategy', 'Blog Writing', 'Video Content', 'Infographics']
    },
    {
      id: 'email-marketing',
      title: 'EMAIL MARKETING',
      description: 'Build relationships and drive conversions with personalized email campaigns and automated workflows.',
      category: 'marketing',
      features: ['Campaign Design', 'Automation', 'Segmentation', 'Analytics']
    },
    {
      id: 'social-media-management',
      title: 'SOCIAL MEDIA MANAGEMENT',
      description: 'Manage your social media presence with strategic content planning, posting, and community engagement.',
      category: 'marketing',
      features: ['Content Planning', 'Post Scheduling', 'Community Management', 'Social Analytics']
    },
    {
      id: 'analytics',
      title: 'ANALYTICS & REPORTING',
      description: 'Track and analyze your digital marketing performance with comprehensive reporting and insights.',
      category: 'marketing',
      features: ['Google Analytics', 'Custom Dashboards', 'Performance Reports', 'Data Insights']
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Component initialization
  }

  setActiveTab(tab: 'development' | 'marketing'): void {
    this.activeTab = tab;
  }

  getServicesByCategory(category: 'development' | 'marketing'): Service[] {
    return this.services.filter(service => service.category === category);
  }

  onReadMore(serviceId: string): void {
    console.log('Read more clicked for service:', serviceId);
    // Here you can implement navigation to service detail page
    // this.router.navigate(['/services', serviceId]);
  }

  onServiceCardClick(service: Service): void {
    console.log('Service card clicked:', service);
    // Handle service card click - could open modal, navigate to detail page, etc.
  }
}