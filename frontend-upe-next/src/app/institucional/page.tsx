import Link from 'next/link';

export default function InstitucionalPage() {
  const sections = [
    {
      title: 'Quem Somos',
      description: 'Conheça a nossa instituição, nossa missão e propósito',
      href: '/institucional/quem-somos',
      icon: '👥',
    },
    {
      title: 'História',
      description: 'Acompanhe a jornada e evolução da nossa instituição',
      href: '/institucional/historia',
      icon: '📚',
    },
    {
      title: 'Gestão Atual',
      description: 'Conheça nossos diretores e equipe de lideranças',
      href: '/institucional/gestao',
      icon: '👔',
    },
    {
      title: 'Documentos',
      description: 'Acesse estatuto e documentos oficiais',
      href: '/institucional/documentos',
      icon: '📄',
    },
    {
      title: 'Ex-Presidentes',
      description: 'Lista dos ex-presidentes e mandatos',
      href: '/institucional/ex-presidentes',
      icon: '🕊️',
    },
    {
      title: 'Moções e Resoluções',
      description: 'Registro de moções, resoluções e deliberações',
      href: '/institucional/mocoes-resolucoes',
      icon: '📜',
    },
    {
      title: 'Pautas e Bandeiras',
      description: 'Conheça nossos objetivos e compromissos estratégicos',
      href: '/institucional/pautas',
      icon: '🎯',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Institucional</h1>
          <p className="text-blue-100 text-lg">Informações sobre nossa instituição, história e lideranças</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <Link
              key={idx}
              href={section.href}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-xl font-bold text-blue-600 mb-2">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
              <div className="mt-4 text-blue-600 font-semibold">Saiba mais →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
