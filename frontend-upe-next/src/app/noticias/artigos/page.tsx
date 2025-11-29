import Link from 'next/link';

export default function ArtigosPage() {
  const articles = [
    {
      id: 1,
      title: 'O Futuro da Educação',
      excerpt: 'Explore as tendências e inovações que moldão o futuro educacional',
      date: '20 de Outubro de 2024',
      category: 'Educação',
      link: '#',
    },
    {
      id: 2,
      title: 'Sustentabilidade em Ação',
      excerpt: 'Conheça iniciativas sustentáveis que estamos desenvolvendo',
      date: '15 de Outubro de 2024',
      category: 'Sustentabilidade',
      link: '#',
    },
    {
      id: 3,
      title: 'Inclusão Digital para Todos',
      excerpt: 'Como estamos promovendo acesso à tecnologia para a comunidade',
      date: '10 de Outubro de 2024',
      category: 'Tecnologia',
      link: '#',
    },
    {
      id: 4,
      title: 'Resultados do Programa Social',
      excerpt: 'Veja o impacto positivo gerado em nossas comunidades',
      date: '05 de Outubro de 2024',
      category: 'Sociedade',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-teal-600 text-white py-12">
        <div className="container-custom">
          <Link href="/noticias" className="text-teal-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Artigos</h1>
          <p className="text-teal-100 text-lg">Principais publicações e análises</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <p className="text-sm text-gray-500">{article.date}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
