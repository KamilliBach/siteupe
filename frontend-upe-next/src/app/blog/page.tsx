"use client"

import BlogCard from "@/components/blog/BlogCard";
import { BlogPost } from "@/types";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error("Falha ao buscar posts");
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert("Post criado com sucesso!");
      setTitle("");
      setContent("");
    } else {
      alert("Erro ao criar o post.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Blog Institucional</h1>
          <p className="text-blue-100 text-lg">
            Todos os artigos, notícias e atualizações
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-custom py-16">
        {/* Formulário para criação de novos posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Criar Novo Post</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Conteúdo
              </label>
              <textarea
                placeholder="Conteúdo"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-all"
            >
              Criar Post
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
