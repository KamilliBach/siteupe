import Hero from '@/components/home/Hero';
import MapaPresenca from '@/components/home/MapaPresenca';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Mapa de Presença */}
      <MapaPresenca />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Sobre a UPE */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1A4081' }}>Sobre a UPE</h2>
            
            <div className="p-8 rounded-lg border mb-8" style={{ backgroundColor: '#E0F2F7', borderColor: 'rgba(26, 64, 129, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F2654' }}>União Paranaense dos Estudantes</h3>
              <p className="mb-4 text-lg" style={{ color: '#333333' }}>
                A UPE é a organização que representa e defende os direitos dos estudantes do Paraná.
                Através de nossas ações, buscamos transformar a educação e a sociedade.
              </p>
              <p className="text-lg" style={{ color: '#333333' }}>
                Somos uma entidade estudantil que atua em defesa de uma educação pública, gratuita, de qualidade e socialmente relevante.
              </p>
            </div>

            <Link
              href="/institucional/quem-somos"
              className="font-semibold text-lg transition-opacity hover:opacity-70"
              style={{ color: '#1A4081' }}
            >
              Saiba mais sobre nós →
            </Link>
          </section>

          {/* Acesso Rápido */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0F2654' }}>Acesso Rápido</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/noticias" className="p-6 rounded-lg shadow text-white flex flex-col" style={{ backgroundColor: '#1A4081' }}>
                <div className="text-lg font-semibold">Notícias</div>
                <div className="text-sm mt-2 opacity-90">Acesse publicações e artigos</div>
              </Link>

              <Link href="/servicos" className="p-6 rounded-lg shadow text-white flex flex-col" style={{ backgroundColor: '#14B8A6' }}>
                <div className="text-lg font-semibold">Serviços</div>
                <div className="text-sm mt-2 opacity-90">Convênios, informações e organização</div>
              </Link>

              <Link href="/institucional/ex-presidentes" className="p-6 rounded-lg shadow text-white flex flex-col" style={{ backgroundColor: '#4CAF50' }}>
                <div className="text-lg font-semibold">Ex-Presidentes</div>
                <div className="text-sm mt-2 opacity-90">Lista de mandatos</div>
              </Link>

              <Link href="/institucional/mocoes-resolucoes" className="p-6 rounded-lg shadow text-white flex flex-col" style={{ backgroundColor: '#0F2654' }}>
                <div className="text-lg font-semibold">Moções e Resoluções</div>
                <div className="text-sm mt-2 opacity-90">Deliberações e documentos</div>
              </Link>

              <Link href="/blog" className="p-6 rounded-lg shadow text-white flex flex-col" style={{ backgroundColor: '#1A4081' }}>
                <div className="text-lg font-semibold">Blog</div>
                <div className="text-sm mt-2 opacity-90">Artigos e análises</div>
              </Link>

              <Link href="/contato" className="p-6 rounded-lg shadow text-white flex flex-col" style={{ backgroundColor: '#14B8A6' }}>
                <div className="text-lg font-semibold">Contato</div>
                <div className="text-sm mt-2 opacity-90">Fale conosco</div>
              </Link>
            </div>
          </section>

          {/* Áreas de Atuação */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12" style={{ color: '#1A4081' }}>Nossas Áreas de Atuação</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg border" style={{ borderColor: '#EEEEEE' }}>
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A4081' }}>Educação</h3>
                <p style={{ color: '#666666' }}>
                  Lutamos por uma educação pública, gratuita e de qualidade para todos os estudantes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border" style={{ borderColor: '#EEEEEE' }}>
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A4081' }}>Direitos Estudantis</h3>
                <p style={{ color: '#666666' }}>
                  Defendemos os direitos e garantias dos estudantes perante as instituições.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border" style={{ borderColor: '#EEEEEE' }}>
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A4081' }}>Sustentabilidade</h3>
                <p style={{ color: '#666666' }}>
                  Promovemos ações e debates sobre desenvolvimento sustentável e responsabilidade social.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border" style={{ borderColor: '#EEEEEE' }}>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A4081' }}>Mobilização Social</h3>
                <p style={{ color: '#666666' }}>
                  Organizamos eventos, manifestações e campanhas para transformação social.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-12 rounded-lg text-center border" style={{ backgroundColor: '#E0F2F7', borderColor: 'rgba(26, 64, 129, 0.2)' }}>
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#1A4081' }}>Faça Parte do Movimento</h3>
            <p className="mb-8 text-lg max-w-2xl mx-auto" style={{ color: '#333333' }}>
              Junte-se a nós na luta pelos direitos dos estudantes e transformação social.
            </p>
            <Link
              href="/Conhe�a"
              className="inline-block text-white px-8 py-3 rounded-lg font-bold transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: '#4CAF50' }}
            >
              Conhe�a Agora
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

