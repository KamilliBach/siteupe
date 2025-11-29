import Link from 'next/link';

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <Link href="/institucional" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Quem Somos</h1>
          <p className="text-blue-100 text-lg">Conheça nossa instituição e propósito</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Sobre Nossa Instituição</h2>
          <p className="text-gray-700 mb-4">
            Somos uma instituição dedicada ao desenvolvimento social, educacional e tecnológico da comunidade.
            Com mais de 20 anos de atuação, consolidamos nossa presença como referência em excelência e inovação.
          </p>
          <p className="text-gray-700 mb-4">
            Nossa missão é servir a comunidade com responsabilidade, promovendo conhecimento,
            inclusão social e desenvolvimento sustentável.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Informações de Contato</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Telefone:</strong> (00) 0000-0000
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> contato@instituicao.com
            </p>
            <p className="text-gray-700">
              <strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
