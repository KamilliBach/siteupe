export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Sobre a Instituição</h1>
          <p className="text-blue-100 text-lg">Conheça nossa história, missão e valores</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Missão, Visão e Valores */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Missão, Visão e Valores</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Missão</h3>
                <p className="text-gray-700">
                  Serviremos a comunidade com excelência, inovação e responsabilidade social, contribuindo para o desenvolvimento sustentável.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecida como uma instituição de referência nacional e internacional, promotora de conhecimento e transformação social.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Integridade</li>
                  <li>✓ Excelência</li>
                  <li>✓ Inovação</li>
                  <li>✓ Sustentabilidade</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Nossa História */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-4 text-gray-700">
              <p>
                Fundada há mais de duas décadas, nossa instituição começou com um simples objetivo: fazer diferença na vida das pessoas através da educação e inovação.
              </p>
              <p>
                Ao longo dos anos, crescemos significativamente, expandindo nossos programas e alcance, sempre mantendo nosso compromisso com a qualidade e a excelência.
              </p>
              <p>
                Hoje, somos reconhecidos por nossa contribuição ao desenvolvimento social, tecnológico e educacional, com mais de 10 mil alunos e centenas de colaboradores dedicados.
              </p>
              <p>
                Continuamos evoluindo, adaptando-nos aos desafios do mundo moderno, sempre com foco em criar um futuro melhor para todos.
              </p>
            </div>
          </section>

          {/* Números */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nossos Números</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: '10K+', label: 'Alunos' },
                { number: '500+', label: 'Colaboradores' },
                { number: '20+', label: 'Anos de Atuação' },
                { number: '50+', label: 'Parcerias' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-blue-600 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Áreas de Atuação */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Áreas de Atuação</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Educação',
                  description: 'Programas educacionais inovadores e de qualidade para todos os níveis.',
                },
                {
                  title: 'Pesquisa e Inovação',
                  description: 'Desenvolvemos soluções inovadoras que impactam positivamente a sociedade.',
                },
                {
                  title: 'Extensão Comunitária',
                  description: 'Ações sociais e comunitárias que promovem inclusão e desenvolvimento.',
                },
                {
                  title: 'Parcerias Estratégicas',
                  description: 'Colaborações que fortalecem nosso impacto e alcance institucional.',
                },
              ].map((area, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
