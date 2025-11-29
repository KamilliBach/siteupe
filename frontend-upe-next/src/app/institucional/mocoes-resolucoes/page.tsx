import React from 'react';

const sampleItems = [
  { id: 'm1', title: 'Moção de Apoio - Projeto X', date: '2023-05-12' },
  { id: 'r1', title: 'Resolução 10/2022 - Funcionamento', date: '2022-11-02' },
  { id: 'm2', title: 'Moção de Repúdio - Política Y', date: '2021-08-30' },
];

export default function MocoesResolucoesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">Moções e Resoluções</h1>
          <p className="text-blue-100 mt-2">Registros de moções, resoluções e deliberações da instituição.</p>
        </div>
      </section>

      <main className="container-custom py-12">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Documentos</h2>
          <ul className="space-y-3">
            {sampleItems.map((it) => (
              <li key={it.id} className="flex items-center justify-between border-b pb-3">
                <div>
                  <div className="font-medium text-gray-900">{it.title}</div>
                  <div className="text-sm text-gray-600">Data: {it.date}</div>
                </div>
                <a href={`#/documents/${it.id}`} className="text-blue-600 font-medium">
                  Ver
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
