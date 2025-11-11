import Link from 'next/link';
import { BlogPost } from '@/types';
import { formatDate } from '@/utils/formatDate';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {post.image && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-blue-600 font-semibold">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Ler mais →
          </Link>
        </div>
      </div>
    </article>
  );
}
