import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-white py-24 text-center relative overflow-hidden bg-gradient-to-b from-blue-upe-700 to-blue-upe-800">
      {/* Decorative accent circle */}
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-teal-upe-500/8" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">A Voz dos Estudantes do Paraná</h1>
        <p className="text-xl md:text-2xl mb-12 font-medium max-w-3xl mx-auto text-light-blue-upe-100">
          Unindo forças para transformação educacional e social
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contato"
            className="bg-teal-upe-500 text-white px-8 py-3 rounded-lg font-bold transition-opacity hover:opacity-90 shadow-lg"
          >
            Contato
          </Link>

          <Link
            href="/institucional/pautas"
            className="bg-white text-blue-upe-700 px-8 py-3 rounded-lg font-bold transition-opacity hover:opacity-90 shadow-lg"
          >
            Nossas Pautas
          </Link>

          <Link
            href="/noticias"
            className="bg-green-upe-500 text-white px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 shadow-inner"
          >
            Notícias
          </Link>
        </div>
      </div>
    </section>
  );
}

