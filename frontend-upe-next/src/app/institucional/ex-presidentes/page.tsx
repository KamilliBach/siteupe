import React from 'react';
import Link from 'next/link';

const samplePresidents = [
  { id: '1', name: 'Ana Silva', term: '2018 - 2019' },
  { id: '2', name: 'João Pereira', term: '2019 - 2020' },
  { id: '3', name: 'Mariana Costa', term: '2020 - 2022' },
];

export default function ExPresidentesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">Ex-Presidentes</h1>
          <p className="text-blue-100 mt-2">Lista de ex-presidentes e respectivos mandatos.</p>
        </div>
      </section>

      <main className="container-custom py-12">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Ex-presidentes</h2>
          <ul className="space-y-3">
            {samplePresidents.map((p) => (
              <li key={p.id} className="flex items-center justify-between border-b pb-3">
                <div>
                  <div className="font-medium text-gray-900">{p.name}</div>
                  <div className="text-sm text-gray-600">Mandato: {p.term}</div>
                </div>
                <Link href={`/institucional/ex-presidentes/${p.id}`} className="text-blue-600 font-medium">
                  Ver
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
