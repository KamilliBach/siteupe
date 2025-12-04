import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { BlogPost } from '@/types';

export default function AboutPage() {
  const postagens: BlogPost[] = [
    {
      id: '1',
      slug: 'boas-praticas-institucionais',
      title: 'Boas Práticas Institucionais',
      excerpt: 'Conheça as boas práticas que norteiam nossa instituição e como elas impactam nossas operações diárias.',
      content: 'Conteúdo completo da postagem sobre boas práticas.',
      author: 'Admin',
      date: new Date(2024, 10, 10).toISOString(),
      image: 'https://via.placeholder.com/600x400?text=Boas+Práticas',
      tags: ['práticas', 'instituição', 'operações'],
      category: 'Destaques',
    },
    {
      id: '2',
      slug: 'transformacao-digital',
      title: 'Transformação Digital em Foco',
      excerpt: 'Exploraremos como a transformação digital está revolucionando nossa instituição e melhorando serviços.',
      content: 'Conteúdo completo sobre transformação digital.',
      author: 'Admin',
      date: new Date(2024, 10, 8).toISOString(),
      image: 'https://via.placeholder.com/600x400?text=Digital',
      tags: ['tecnologia', 'digital', 'transformação'],
      category: 'Tecnologia',
    },
    {
      id: '3',
      slug: 'sustentabilidade-compromisso',
      title: 'Sustentabilidade: Nosso Compromisso',
      excerpt: 'Descubra como estamos comprometidos com práticas sustentáveis e responsabilidade social.',
      content: 'Conteúdo completo sobre sustentabilidade.',
      author: 'Admin',
      date: new Date(2024, 10, 5).toISOString(),
      image: 'https://via.placeholder.com/600x400?text=Sustentabilidade',
      tags: ['sustentabilidade', 'responsabilidade', 'ambiental'],
      category: 'Sustentabilidade',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Sobre a Instituição</h1>
          <p className="text-blue-100 text-lg">Conheça mais sobre nossa instituição, história e compromissos</p>
        </div>
      </section>

      {/* Link para Home */}
      <div className="container-custom py-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
          ← Voltar para Home
        </Link>
      </div>

      {/* Main Content */}
      <main className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link href="/" className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Missão & Valores</h3>
              <p className="text-sm text-gray-600">Entenda nossa missão, visão e os valores que nos guiam</p>
            </Link>
            <Link href="/" className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Nossa História</h3>
              <p className="text-sm text-gray-600">Conheça a jornada de mais de 20 anos da instituição</p>
            </Link>
            <Link href="/" className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Áreas de Atuação</h3>
              <p className="text-sm text-gray-600">Descubra nossas áreas de atuação e impacto social</p>
            </Link>
          </div>

          {/* Artigos Relacionados */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {postagens.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Quer conhecer mais?</h2>
            <p className="mb-6 text-blue-100">Visite nossa página principal para conhecer toda a nossa instituição</p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Ir para Home
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

