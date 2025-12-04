import Link from 'next/link';

export default function MidiaPage() {
  const media = [
    { id: 1, title: 'Evento Principal 2024', type: 'Foto', link: '#' },
    { id: 2, title: 'Workshop de Tecnologia', type: 'Vídeo', link: '#' },
    { id: 3, title: 'Formatura dos Alunos', type: 'Foto', link: '#' },
    { id: 4, title: 'Entrevista com Diretor', type: 'Vídeo', link: '#' },
    { id: 5, title: 'Atividade Comunitária', type: 'Foto', link: '#' },
    { id: 6, title: 'Seminário Anual', type: 'Vídeo', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-teal-600 text-white py-12">
        <div className="container-custom">
          <Link href="/noticias" className="text-teal-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Mídia</h1>
          <p className="text-teal-100 text-lg">Fotos e vídeos de nossos eventos</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {media.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group bg-gray-300 h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex items-center justify-center cursor-pointer"
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{item.type === 'Foto' ? '🖼️' : '🎬'}</div>
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.type}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

