import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const postLink = `/blog/${post.slug}`;
  const accentColor = "text-teal-600";
  const categoryBg = "bg-teal-100";

  return (
    <article className="card w-full max-w-sm overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Imagem de Destaque */}
      <div className="relative h-48 w-full bg-gray-200">
        {post.image && (
          <Image
            src={post.image}
            alt={`Imagem de destaque para ${post.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      {/* Conteúdo do Cartão */}
      <div className="p-5">
        {/* Categoria e Data */}
        <div className="flex items-center justify-between text-xs font-medium text-stone-500 mb-2">
          <span className={`${categoryBg} ${accentColor} px-2 py-0.5 rounded-full uppercase tracking-wider`}>
            {post.category}
          </span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        {/* Título */}
        <Link href={postLink} passHref>
          <h3 className={`text-xl font-bold leading-snug mb-3 hover:${accentColor} transition-colors duration-150 cursor-pointer`}>
            {post.title}
          </h3>
        </Link>

        {/* Resumo */}
        <p className="text-sm text-stone-600 mb-4">
          {post.excerpt}
        </p>

        {/* Link de Leitura */}
        <Link href={postLink} passHref>
          <span className={`font-semibold ${accentColor} hover:text-teal-700 transition-colors duration-150 cursor-pointer text-sm flex items-center`}>
            Leia Mais
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
