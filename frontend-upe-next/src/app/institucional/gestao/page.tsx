import Link from 'next/link';

export default function GestaoPage() {
  const directors = [
    {
      name: 'João Silva',
      role: 'Presidente',
      email: 'joao@instituicao.com',
      phone: '(11) 98765-4321',
      image: 'https://via.placeholder.com/300x300?text=João',
    },
    {
      name: 'Maria Santos',
      role: 'Vice-Presidente',
      email: 'maria@instituicao.com',
      phone: '(11) 98765-4322',
      image: 'https://via.placeholder.com/300x300?text=Maria',
    },
    {
      name: 'Carlos Oliveira',
      role: 'Diretor Executivo',
      email: 'carlos@instituicao.com',
      phone: '(11) 98765-4323',
      image: 'https://via.placeholder.com/300x300?text=Carlos',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <Link href="/institucional" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Gestão Atual</h1>
          <p className="text-blue-100 text-lg">Conheça nossa equipe de lideranças</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {directors.map((director, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-4xl">👤</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{director.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{director.role}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${director.email}`} className="text-blue-600 hover:underline">
                      {director.email}
                    </a>
                  </p>
                  <p>
                    <strong>Telefone:</strong>{' '}
                    <a href={`tel:${director.phone}`} className="text-blue-600 hover:underline">
                      {director.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
