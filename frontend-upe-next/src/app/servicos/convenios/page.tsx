import Link from 'next/link';

export default function ConveniosPage() {
  const partners = [
    {
      name: 'Empresa Tech Solutions',
      category: 'Tecnologia',
      discount: '15% de desconto',
      link: '#',
    },
    {
      name: 'Academia Fitness Plus',
      category: 'Saúde',
      discount: '20% de desconto',
      link: '#',
    },
    {
      name: 'Biblioteca Digital Online',
      category: 'Educação',
      discount: 'Acesso gratuito',
      link: '#',
    },
    {
      name: 'Consultório Médico Premium',
      category: 'Saúde',
      discount: '25% de desconto',
      link: '#',
    },
    {
      name: 'Plataforma de Cursos Online',
      category: 'Educação',
      discount: '30% de desconto',
      link: '#',
    },
    {
      name: 'Software de Produtividade',
      category: 'Tecnologia',
      discount: 'Licença estudantil',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-amber-600 text-white py-12">
        <div className="container-custom">
          <Link href="/servicos" className="text-amber-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Convênios</h1>
          <p className="text-amber-100 text-lg">Empresas parceiras e descontos exclusivos</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.link}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{partner.category}</p>
              <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-2 rounded-lg inline-block">
                {partner.discount}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

