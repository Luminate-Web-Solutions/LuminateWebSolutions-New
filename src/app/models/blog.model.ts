export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: Date;
  readTime: string;
  image: string;
  tags: string[];
}