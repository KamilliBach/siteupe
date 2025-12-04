import Link from 'next/link';

export default function OrganizacaoPage() {
  const organizations = [
    {
      name: 'Diretório Central de Estudantes (DCE)',
      role: 'Representação geral dos estudantes',
      email: 'dce@instituicao.com',
      phone: '(11) 3000-0001',
    },
    {
      name: 'Centro Acadêmico (CA)',
      role: 'Representação de curso específico',
      email: 'ca@instituicao.com',
      phone: '(11) 3000-0002',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-amber-600 text-white py-12">
        <div className="container-custom">
          <Link href="/servicos" className="text-amber-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Organizações</h1>
          <p className="text-amber-100 text-lg">DCE, CA e informações de participação</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-amber-600 mb-3">{org.name}</h3>
                <p className="text-gray-700 mb-4">{org.role}</p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${org.email}`} className="text-amber-600 hover:underline">
                      {org.email}
                    </a>
                  </p>
                  <p>
                    <strong>Telefone:</strong>{' '}
                    <a href={`tel:${org.phone}`} className="text-amber-600 hover:underline">
                      {org.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="text-lg font-bold text-blue-600 mb-3">Como Participar?</h4>
            <p className="text-gray-700">
              Se você deseja participar das atividades estudantis ou contribuir para melhorias na instituição,
              entre em contato com uma das organizações acima. Estamos sempre abertos a novas contribuições!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

