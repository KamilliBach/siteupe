import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-24">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Bem-vindo ao Blog Institucional</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Notícias, artigos e informações relevantes sobre nossa instituição. Mantenha-se atualizado com as últimas novidades.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/blog"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Explorar Artigos
          </Link>
          <Link
            href="/about"
            className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors border border-blue-500"
          >
            Sobre a Instituição
          </Link>
        </div>
      </div>
    </section>
  );
}
