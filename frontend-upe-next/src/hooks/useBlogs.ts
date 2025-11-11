/**
 * Hook customizado para gerenciar dados de blogs
 */

import { BlogPost } from '@/types';

export const useBlogs = () => {
  // Exemplo de dados estáticos (será substituído por API/CMS depois)
  const blogs: BlogPost[] = [
    {
      id: '1',
      slug: 'boas-praticas-institucionais',
      title: 'Boas Práticas Institucionais',
      excerpt: 'Saiba mais sobre as boas práticas que orientam nossa instituição.',
      content: 'Conteúdo completo do artigo...',
      author: 'Admin',
      date: new Date().toISOString(),
      tags: ['práticas', 'instituição'],
      category: 'Noticias',
    },
  ];

  const getBlogBySlug = (slug: string): BlogPost | undefined => {
    return blogs.find((blog) => blog.slug === slug);
  };

  const getAllBlogs = (): BlogPost[] => {
    return blogs;
  };

  const getBlogsByCategory = (category: string): BlogPost[] => {
    return blogs.filter((blog) => blog.category === category);
  };

  return {
    blogs,
    getBlogBySlug,
    getAllBlogs,
    getBlogsByCategory,
  };
};
