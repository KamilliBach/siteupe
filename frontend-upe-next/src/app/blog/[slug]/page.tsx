'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { formatDate } from '@/utils/formatDate';

const postsData: Record<string, any> = {
  'boas-praticas-institucionais': {
    title: 'Boas Práticas Institucionais',
    author: 'João Silva',
    date: '2024-11-10',
    category: 'Destaques',
    image: 'https://via.placeholder.com/800x400?text=Boas+Práticas',
    tags: ['práticas', 'instituição', 'operações'],
    content: `
      <h2>Introdução</h2>
      <p>As boas práticas institucionais são o alicerce de qualquer organização bem-sucedida. Neste artigo, exploraremos os princípios que norteiam nossa instituição.</p>
      
      <h2>Pilares das Boas Práticas</h2>
      <p>Nossos pilares fundamentais incluem:</p>
      <ul>
        <li><strong>Transparência:</strong> Todas as operações são conduzidas com clareza e honestidade.</li>
        <li><strong>Integridade:</strong> Mantemos altos padrões éticos em todas as nossas ações.</li>
        <li><strong>Responsabilidade:</strong> Assumimos total responsabilidade por nossas decisões.</li>
        <li><strong>Inovação:</strong> Buscamos constantemente novas formas de melhorar.</li>
      </ul>
      
      <h2>Impacto na Organização</h2>
      <p>Quando as boas práticas são implementadas corretamente, o impacto é profundo e mensurável em toda a organização.</p>
      
      <h2>Conclusão</h2>
      <p>As boas práticas não são apenas diretrizes, são a essência de como operamos e crescemos como instituição.</p>
    `,
  },
  'transformacao-digital': {
    title: 'Transformação Digital em Foco',
    author: 'Maria Santos',
    date: '2024-11-08',
    category: 'Tecnologia',
    image: 'https://via.placeholder.com/800x400?text=Digital',
    tags: ['tecnologia', 'digital', 'transformação'],
    content: `
      <h2>A Era Digital</h2>
      <p>A transformação digital não é mais uma opção, mas uma necessidade para qualquer instituição moderna.</p>
      
      <h2>Nosso Caminho Digital</h2>
      <p>Estamos investindo em tecnologias que melhoram a experiência dos nossos usuários e aumentam a eficiência operacional.</p>
      
      <h2>Tecnologias Implementadas</h2>
      <ul>
        <li>Cloud Computing</li>
        <li>Inteligência Artificial</li>
        <li>Análise de Dados</li>
        <li>Automação de Processos</li>
      </ul>
      
      <h2>Resultados</h2>
      <p>Os resultados iniciais são promissores, com melhorias significativas em produtividade e satisfação do usuário.</p>
    `,
  },
  'sustentabilidade-compromisso': {
    title: 'Sustentabilidade: Nosso Compromisso',
    author: 'Carlos Oliveira',
    date: '2024-11-05',
    category: 'Sustentabilidade',
    image: 'https://via.placeholder.com/800x400?text=Sustentabilidade',
    tags: ['sustentabilidade', 'responsabilidade', 'ambiental'],
    content: `
      <h2>Compromisso com o Planeta</h2>
      <p>A sustentabilidade é central para nossa estratégia institucional de longo prazo.</p>
      
      <h2>Iniciativas Sustentáveis</h2>
      <ul>
        <li>Redução de emissões de carbono</li>
        <li>Uso de energias renováveis</li>
        <li>Gestão responsável de resíduos</li>
        <li>Programas de educação ambiental</li>
      </ul>
      
      <h2>Metas para 2030</h2>
      <p>Nossa instituição se comprometeu com metas ambiciosas para os próximos anos, alinhadas com os Objetivos de Desenvolvimento Sustentável da ONU.</p>
    `,
  },
};

export default function PostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = postsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="container-custom py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-gray-600 mb-8">Desculpe, o artigo que você procura não existe.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Voltar para o Blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white border-b">
        <main className="container-custom py-12">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Voltar para o Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <span className="font-semibold">{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </main>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="h-96 bg-gray-200 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <main className="container-custom py-12">
        <article className="max-w-3xl mx-auto bg-white rounded-lg p-8 border border-gray-200">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts Link */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
              Ver mais artigos →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
