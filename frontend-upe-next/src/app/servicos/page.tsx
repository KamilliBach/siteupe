import Link from 'next/link';

export default function ServicosPage() {
  const sections = [
    {
      title: 'Informações',
      description: 'FAQ, guias, calendário acadêmico e regulamentações',
      href: '/servicos/informacoes',
      icon: 'ℹ️',
    },
    {
      title: 'Convênios',
      description: 'Empresas parceiras, descontos e como acessar',
      href: '/servicos/convenios',
      icon: '🤝',
    },
    {
      title: 'Organização',
      description: 'DCE, CA e informações de participação',
      href: '/servicos/organizacao',
      icon: '🏛️',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-amber-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Serviços</h1>
          <p className="text-amber-100 text-lg">Serviços e informações importantes</p>
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
              <h2 className="text-xl font-bold text-amber-600 mb-2">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
              <div className="mt-4 text-amber-600 font-semibold">Acessar →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
