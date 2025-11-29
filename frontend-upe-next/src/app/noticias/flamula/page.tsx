import Link from 'next/link';

export default function FlamulaPage() {
  const articles = [
    {
      title: 'Edição Especial - Aniversário da Instituição',
      date: '01 de Dezembro de 2024',
      excerpt: 'Confira a edição especial que celebra mais um ano de história e inovação',
      link: '#',
    },
    {
      title: 'Destaque: Programas Sociais 2024',
      date: '15 de Novembro de 2024',
      excerpt: 'Conheca os principais programas desenvolvidos durante o ano',
      link: '#',
    },
    {
      title: 'Transformação Digital em Foco',
      date: '01 de Novembro de 2024',
      excerpt: 'Entenda como a tecnologia está transformando nossas operações',
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
          <h1 className="text-4xl font-bold mb-2">Flâmula</h1>
          <p className="text-teal-100 text-lg">Nossa publicação oficial</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow block"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-sm text-teal-600 mb-3">{article.date}</p>
              <p className="text-gray-600">{article.excerpt}</p>
              <div className="mt-4 text-teal-600 font-semibold">Ler artigo completo →</div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
