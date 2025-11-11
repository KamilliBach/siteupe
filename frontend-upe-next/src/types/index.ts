/**
 * Types e interfaces globais da aplicação
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  tags: string[];
  category: string;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  bio?: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}
