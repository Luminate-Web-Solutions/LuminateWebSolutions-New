import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'Strengthening AI Agent Hijacking Evaluations',
      excerpt: 'Large AI models are increasingly used to power agentic systems, or "agents," which can automate complex tasks on behalf of users.',
      content: `
        <h2>Understanding AI Agent Security</h2>
        <p>Large AI models are increasingly used to power agentic systems, or "agents," which can automate complex tasks on behalf of users. AI agents could have a wide range of potential benefits, such as automating scientific research or serving as personal assistants. However, to fully realize the potential of AI agents, it is essential to identify and measure — in order to ultimately mitigate — the security risks these systems could introduce.</p>
        
        <p>Currently, many AI agents are vulnerable to agent hijacking, a type of indirect prompt injection in which an attacker inserts malicious instructions into data that may be ingested by an AI agent, causing it to take unintended, harmful actions.</p>
        
        <h3>The U.S. AI Safety Institute (US AISI) conducted initial experiments to advance the science of evaluating agent hijacking risk and below are key insights from this work:</h3>
        
        <ul>
          <li><strong>Insight #1:</strong> Continuous improvement and expansion of shared evaluation frameworks is important.</li>
          <li><strong>Insight #2:</strong> Evaluations need to be adaptive. Even as new systems address previously known attacks, red teaming can reveal other weaknesses.</li>
          <li><strong>Insight #3:</strong> When assessing risk, it can be informative to analyze task-specific attack performance in addition to aggregate performance.</li>
          <li><strong>Insight #4:</strong> Testing the success of attacks on multiple attempts may yield more realistic evaluation results.</li>
        </ul>
        
        <h3>Implementation Strategies</h3>
        <p>Organizations implementing AI agents should consider robust security frameworks that include regular vulnerability assessments, prompt injection detection systems, and comprehensive monitoring of agent behaviors. The development of standardized evaluation methodologies will be crucial for the broader AI community.</p>
        
        <h3>Future Considerations</h3>
        <p>As AI agents become more sophisticated and widely deployed, the importance of security evaluations will only increase. Collaborative efforts between researchers, industry practitioners, and regulatory bodies will be essential to establish best practices and maintain the beneficial potential of AI agent technology while minimizing risks.</p>
      `,
      category: 'Technical Blog',
      author: 'Luminate',
      publishDate: new Date('2025-05-31'),
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AI', 'Security', 'Technology']
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the cutting-edge technologies and methodologies that are reshaping the web development landscape.',
      content: `
        <h2>Revolutionary Changes in Web Development</h2>
        <p>The web development industry continues to evolve at breakneck speed, with 2025 bringing unprecedented innovations that are transforming how we build and interact with digital experiences. From AI-powered development tools to revolutionary frameworks, the landscape is more exciting than ever.</p>
        
        <h3>Key Trends Shaping 2025</h3>
        <ul>
          <li><strong>AI-Assisted Development:</strong> Machine learning algorithms are now capable of generating production-ready code, significantly accelerating development cycles.</li>
          <li><strong>Edge Computing Integration:</strong> Applications are moving closer to users, reducing latency and improving performance through distributed computing architectures.</li>
          <li><strong>WebAssembly Adoption:</strong> High-performance applications are leveraging WebAssembly for near-native speed in web browsers.</li>
          <li><strong>Progressive Web Apps 2.0:</strong> Enhanced PWA capabilities are blurring the lines between web and native applications.</li>
        </ul>
        
        <h3>Framework Evolution</h3>
        <p>Modern frameworks are embracing server-side rendering, static site generation, and hybrid approaches that optimize for both performance and developer experience. React, Vue, and Angular continue to innovate while new players enter the market with fresh perspectives.</p>
        
        <h3>Performance Optimization</h3>
        <p>Core Web Vitals have become critical metrics, driving developers to prioritize loading speed, interactivity, and visual stability. Advanced techniques like code splitting, lazy loading, and intelligent caching strategies are now standard practices.</p>
        
        <h3>Security First Approach</h3>
        <p>With increasing cyber threats, security considerations are being built into the development process from day one. Zero-trust architectures and advanced authentication methods are becoming the norm rather than the exception.</p>
      `,
      category: 'Web Development',
      author: 'Luminate',
      publishDate: new Date('2025-05-28'),
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Web Development', 'Trends', 'Technology']
    },
    {
      id: 3,
      title: 'Digital Marketing ROI: Measuring Success in the Modern Era',
      excerpt: 'Learn how to effectively track and optimize your digital marketing investments for maximum return.',
      content: `
        <h2>Maximizing Digital Marketing Returns</h2>
        <p>In today's competitive digital landscape, measuring and optimizing return on investment (ROI) has become more crucial than ever. Businesses are investing heavily in digital marketing channels, but many struggle to accurately assess the effectiveness of their campaigns and strategies.</p>
        
        <h3>Key Performance Indicators (KPIs) That Matter</h3>
        <ul>
          <li><strong>Customer Acquisition Cost (CAC):</strong> Understanding the true cost of acquiring new customers across different channels.</li>
          <li><strong>Lifetime Value (LTV):</strong> Calculating the long-term value of customers to inform acquisition strategies.</li>
          <li><strong>Conversion Rate Optimization:</strong> Continuously improving the percentage of visitors who take desired actions.</li>
          <li><strong>Attribution Modeling:</strong> Accurately crediting touchpoints in the customer journey.</li>
        </ul>
        
        <h3>Advanced Analytics and Attribution</h3>
        <p>Modern marketing attribution goes beyond last-click models, incorporating multi-touch attribution that provides a holistic view of the customer journey. Advanced analytics platforms now offer machine learning-powered insights that help marketers understand complex interaction patterns.</p>
        
        <h3>Cross-Channel Integration</h3>
        <p>Successful digital marketing requires seamless integration across multiple channels including social media, search engines, email marketing, and content marketing. Each channel should work synergistically to create a cohesive brand experience.</p>
        
        <h3>Data-Driven Decision Making</h3>
        <p>The most successful digital marketing campaigns are built on solid data foundations. Regular A/B testing, cohort analysis, and predictive modeling enable marketers to make informed decisions and continuously optimize their strategies for better results.</p>
      `,
      category: 'Digital Marketing',
      author: 'Luminate',
      publishDate: new Date('2025-05-25'),
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Digital Marketing', 'ROI', 'Analytics']
    },
    {
      id: 4,
      title: 'E-commerce UX Design: Converting Visitors into Customers',
      excerpt: 'Discover the essential UX principles that drive e-commerce success and boost conversion rates.',
      content: `
        <h2>Crafting Exceptional E-commerce Experiences</h2>
        <p>User experience design in e-commerce is the difference between a visitor and a customer. With online shopping becoming increasingly competitive, businesses must focus on creating intuitive, engaging, and trustworthy digital experiences that guide users seamlessly from discovery to purchase.</p>
        
        <h3>Core UX Principles for E-commerce</h3>
        <ul>
          <li><strong>Intuitive Navigation:</strong> Clear category structures and search functionality that help users find products quickly.</li>
          <li><strong>Mobile-First Design:</strong> Responsive designs optimized for mobile shopping experiences.</li>
          <li><strong>Trust Signals:</strong> Security badges, customer reviews, and transparent policies that build confidence.</li>
          <li><strong>Streamlined Checkout:</strong> Simplified purchase processes that minimize cart abandonment.</li>
        </ul>
        
        <h3>Personalization and Recommendations</h3>
        <p>Modern e-commerce platforms leverage AI and machine learning to deliver personalized shopping experiences. Product recommendations, dynamic pricing, and customized content help increase average order values and customer satisfaction.</p>
        
        <h3>Performance Optimization</h3>
        <p>Page load speed directly impacts conversion rates. Every second of delay can result in significant revenue loss. Optimizing images, implementing efficient caching strategies, and using content delivery networks are essential for maintaining competitive performance.</p>
        
        <h3>Social Proof and Reviews</h3>
        <p>Customer reviews, ratings, and social media integration provide the social proof necessary to overcome purchase hesitation. Implementing robust review systems and showcasing user-generated content can significantly boost conversion rates.</p>
        
        <h3>Accessibility and Inclusivity</h3>
        <p>Designing for accessibility ensures that all users, regardless of abilities, can successfully navigate and purchase from your e-commerce platform. This not only expands your potential customer base but also demonstrates social responsibility.</p>
      `,
      category: 'UX Design',
      author: 'Luminate',
      publishDate: new Date('2025-05-22'),
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['UX Design', 'E-commerce', 'Conversion']
    },
    {
      id: 5,
      title: 'SEO Strategies That Actually Work in 2025',
      excerpt: 'Navigate the evolving SEO landscape with proven strategies that deliver sustainable organic growth.',
      content: `
        <h2>Modern SEO: Beyond Keywords and Backlinks</h2>
        <p>Search engine optimization has evolved dramatically from its early days of keyword stuffing and link farming. Today's SEO requires a sophisticated understanding of user intent, technical optimization, and content quality that genuinely serves user needs.</p>
        
        <h3>Core Ranking Factors in 2025</h3>
        <ul>
          <li><strong>E-A-T (Expertise, Authoritativeness, Trustworthiness):</strong> Google prioritizes content from credible sources with demonstrated expertise.</li>
          <li><strong>Core Web Vitals:</strong> Page experience metrics including loading speed, interactivity, and visual stability.</li>
          <li><strong>Mobile-First Indexing:</strong> Mobile optimization is no longer optional but essential for ranking success.</li>
          <li><strong>Semantic Search:</strong> Understanding context and user intent rather than exact keyword matches.</li>
        </ul>
        
        <h3>Content Strategy Evolution</h3>
        <p>Modern SEO content strategy focuses on topic clusters and pillar pages that demonstrate comprehensive expertise in specific subject areas. This approach helps establish topical authority and improves overall site performance in search results.</p>
        
        <h3>Technical SEO Fundamentals</h3>
        <p>Technical optimization remains crucial for SEO success. This includes proper site architecture, XML sitemaps, structured data markup, and ensuring crawlability and indexability of important pages.</p>
        
        <h3>Local SEO and Voice Search</h3>
        <p>With the rise of voice assistants and mobile search, local SEO has become increasingly important. Optimizing for "near me" searches and conversational queries can capture valuable local traffic.</p>
        
        <h3>Measuring SEO Success</h3>
        <p>Modern SEO measurement goes beyond rankings to include organic traffic quality, user engagement metrics, and conversion rates. Tools like Google Search Console and Google Analytics provide insights into search performance and user behavior.</p>
      `,
      category: 'SEO',
      author: 'Luminate',
      publishDate: new Date('2025-05-19'),
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['SEO', 'Search Marketing', 'Organic Growth']
    },
    {
      id: 6,
      title: 'Cloud Solutions for Small Business: A Complete Guide',
      excerpt: 'Understand how cloud technology can transform your small business operations and drive growth.',
      content: `
        <h2>Empowering Small Businesses with Cloud Technology</h2>
        <p>Cloud computing has democratized access to enterprise-level technology, enabling small businesses to compete with larger organizations without massive infrastructure investments. Understanding and implementing the right cloud solutions can be transformative for business operations, scalability, and cost management.</p>
        
        <h3>Essential Cloud Services for Small Business</h3>
        <ul>
          <li><strong>Software as a Service (SaaS):</strong> Access to professional applications without installation or maintenance requirements.</li>
          <li><strong>Infrastructure as a Service (IaaS):</strong> Scalable computing resources that grow with your business needs.</li>
          <li><strong>Platform as a Service (PaaS):</strong> Development platforms that accelerate application creation and deployment.</li>
          <li><strong>Backup and Disaster Recovery:</strong> Automated data protection and business continuity solutions.</li>
        </ul>
        
        <h3>Cost Benefits and ROI</h3>
        <p>Cloud solutions typically operate on subscription models that convert capital expenses to operational expenses, improving cash flow and reducing upfront costs. Small businesses can access enterprise-grade technology without significant initial investments.</p>
        
        <h3>Security and Compliance</h3>
        <p>Modern cloud providers offer robust security measures that often exceed what small businesses could implement independently. Features include encryption, access controls, compliance certifications, and regular security updates.</p>
        
        <h3>Scalability and Flexibility</h3>
        <p>Cloud solutions can scale up or down based on business needs, allowing companies to pay only for resources they use. This flexibility is particularly valuable for businesses with seasonal fluctuations or rapid growth.</p>
        
        <h3>Implementation Best Practices</h3>
        <p>Successful cloud adoption requires careful planning, including data migration strategies, staff training, and gradual implementation phases. Working with experienced cloud consultants can help ensure smooth transitions and optimal configurations.</p>
        
        <h3>Future-Proofing Your Business</h3>
        <p>Cloud adoption positions small businesses to take advantage of emerging technologies like artificial intelligence, machine learning, and advanced analytics without additional infrastructure investments.</p>
      `,
      category: 'Cloud Solutions',
      author: 'Luminate',
      publishDate: new Date('2025-05-16'),
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Cloud Computing', 'Small Business', 'Technology']
    }
  ];

  getBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    const blog = this.blogs.find(b => b.id === id);
    return of(blog);
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.blogs.map(blog => blog.category))];
    return of(categories);
  }

  searchBlogs(query: string, category?: string): Observable<Blog[]> {
    let filteredBlogs = this.blogs;

    if (category && category !== 'All Categories') {
      filteredBlogs = filteredBlogs.filter(blog => blog.category === category);
    }

    if (query) {
      const searchTerm = query.toLowerCase();
      filteredBlogs = filteredBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.excerpt.toLowerCase().includes(searchTerm) ||
        blog.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm))
      );
    }

    return of(filteredBlogs);
  }
}