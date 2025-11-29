import Link from 'next/link';

export default function NoticiasPage() {
  const sections = [
    {
      title: 'Flâmula',
      description: 'Nossa publicação oficial com artigos de destaque',
      href: '/noticias/flamula',
      icon: '📰',
    },
    {
      title: 'Artigos',
      description: 'Leia nossos principais artigos e análises',
      href: '/noticias/artigos',
      icon: '✍️',
    },
    {
      title: 'Mídia',
      description: 'Fotos e vídeos dos nossos eventos',
      href: '/noticias/midia',
      icon: '🎥',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-teal-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Notícias</h1>
          <p className="text-teal-100 text-lg">Fique atualizado sobre nossas atividades</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <Link
              key={idx}
              href={section.href}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-xl font-bold text-teal-600 mb-2">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
              <div className="mt-4 text-teal-600 font-semibold">Acessar →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
