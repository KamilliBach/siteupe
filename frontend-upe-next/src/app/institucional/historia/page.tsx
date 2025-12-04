import Link from 'next/link';

export default function HistoriaPage() {
  const timeline = [
    { year: '2004', event: 'Fundação da instituição com objetivo de transformação social' },
    { year: '2008', event: 'Expansão de programas e alcance na comunidade' },
    { year: '2012', event: 'Implementação de tecnologia em processos' },
    { year: '2016', event: 'Reconhecimento como instituição de referência' },
    { year: '2020', event: 'Adaptação à transformação digital' },
    { year: '2024', event: 'Consolidação como líder em inovação' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <Link href="/institucional" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Nossa História</h1>
          <p className="text-blue-100 text-lg">Conheça a jornada de nossa instituição</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Linha do Tempo</h2>

          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && <div className="w-1 h-16 bg-blue-300 mt-2" />}
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 flex-1">
                  <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

