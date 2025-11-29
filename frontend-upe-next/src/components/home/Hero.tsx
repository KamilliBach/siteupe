import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-white py-24 text-center relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(180deg,#1A4081 0%, #0F2654 60%)' }}>
      {/* Decorative accent circle */}
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full" style={{ backgroundColor: 'rgba(20,184,166,0.08)' }} />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">A Voz dos Estudantes do Paraná</h1>
        <p className="text-xl md:text-2xl mb-12 font-medium max-w-3xl mx-auto" style={{ color: '#E0F2F7' }}>
          Unindo forças para transformação educacional e social
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contato"
            className="text-white px-8 py-3 rounded-lg font-bold transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#14B8A6' }}
          >
            Contato
          </Link>

          <Link
            href="/institucional/pautas"
            className="px-8 py-3 rounded-lg font-bold transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#FFFFFF', color: '#1A4081' }}
          >
            Nossas Pautas
          </Link>

          <Link
            href="/noticias"
            className="px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 shadow-inner"
            style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}
          >
            Notícias
          </Link>
        </div>
      </div>
    </section>
  );
}
