import Link from 'next/link';

export default function DocumentosPage() {
  const documents = [
    { title: 'Estatuto Social', type: 'PDF', size: '2.5 MB', link: '#' },
    { title: 'Regimento Interno', type: 'PDF', size: '1.8 MB', link: '#' },
    { title: 'Relatório Anual 2023', type: 'PDF', size: '5.2 MB', link: '#' },
    { title: 'Política de Privacidade', type: 'PDF', size: '800 KB', link: '#' },
    { title: 'Termos de Serviço', type: 'PDF', size: '1.2 MB', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <Link href="/institucional" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Documentos Oficiais</h1>
          <p className="text-blue-100 text-lg">Acesse nossos estatutos e documentação</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {documents.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
                  <p className="text-sm text-gray-600">
                    {doc.type} • {doc.size}
                  </p>
                </div>
                <div className="text-2xl">📥</div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

