import Link from 'next/link';

export default function PautasPage() {
  const pautas = [
    {
      title: 'Transformação Digital',
      description: 'Modernização dos processos e sistemas da instituição',
      status: 'Em andamento',
    },
    {
      title: 'Inclusão Social',
      description: 'Programas de inclusão e acessibilidade para a comunidade',
      status: 'Ativo',
    },
    {
      title: 'Sustentabilidade',
      description: 'Compromisso com práticas ambientalmente responsáveis',
      status: 'Ativo',
    },
    {
      title: 'Excelência Acadêmica',
      description: 'Aprimoramento contínuo da qualidade educacional',
      status: 'Ativo',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <Link href="/institucional" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Pautas e Bandeiras</h1>
          <p className="text-blue-100 text-lg">Conheça nossos objetivos e compromissos estratégicos</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {pautas.map((pauta, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{pauta.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                  {pauta.status}
                </span>
              </div>
              <p className="text-gray-600">{pauta.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
