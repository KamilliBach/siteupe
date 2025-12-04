import BlogCard from "@/components/blog/BlogCard";
import { BlogPost } from "@/types";

export default function BlogPage() {
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
    {
      id: '4',
      slug: 'inovacao-pesquisa',
      title: 'Inovação e Pesquisa: O Futuro',
      excerpt: 'Conheça nossos projetos de inovação e pesquisa que estão moldando o futuro da instituição.',
      content: 'Conteúdo completo sobre inovação e pesquisa.',
      author: 'Admin',
      date: new Date(2024, 10, 3).toISOString(),
      image: 'https://via.placeholder.com/600x400?text=Inovação',
      tags: ['inovação', 'pesquisa', 'futuro'],
      category: 'Pesquisa',
    },
    {
      id: '5',
      slug: 'comunidade-parcerias',
      title: 'Comunidade e Parcerias Estratégicas',
      excerpt: 'Veja como nossas parcerias estratégicas fortalecem a comunidade e criam oportunidades.',
      content: 'Conteúdo completo sobre comunidade e parcerias.',
      author: 'Admin',
      date: new Date(2024, 10, 1).toISOString(),
      image: 'https://via.placeholder.com/600x400?text=Comunidade',
      tags: ['comunidade', 'parcerias', 'cooperação'],
      category: 'Comunidade',
    },
    {
      id: '6',
      slug: 'excelencia-educacional',
      title: 'Excelência Educacional em Ação',
      excerpt: 'Saiba mais sobre nossos programas educacionais de qualidade e excelência acadêmica.',
      content: 'Conteúdo completo sobre excelência educacional.',
      author: 'Admin',
      date: new Date(2024, 9, 28).toISOString(),
      image: 'https://via.placeholder.com/600x400?text=Educação',
      tags: ['educação', 'excelência', 'acadêmico'],
      category: 'Educação',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Blog Institucional</h1>
          <p className="text-blue-100 text-lg">Todos os artigos, notícias e atualizações</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {postagens.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

