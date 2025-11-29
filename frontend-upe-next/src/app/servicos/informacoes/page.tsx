'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InformacoesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como acessar a plataforma?',
      answer: 'Você pode acessar através do portal principal com suas credenciais de login.',
    },
    {
      question: 'Qual é o calendário acadêmico?',
      answer: 'O calendário acadêmico de 2024 pode ser baixado em nossa seção de documentos.',
    },
    {
      question: 'Como solicitar um atestado?',
      answer: 'Compareça ao departamento de registros acadêmicos com seu documento de identificação.',
    },
    {
      question: 'Qual é a política de reembolso?',
      answer: 'A política de reembolso está disponível no regulamento interno da instituição.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-amber-600 text-white py-12">
        <div className="container-custom">
          <Link href="/servicos" className="text-amber-100 hover:text-white mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Informações</h1>
          <p className="text-amber-100 text-lg">FAQ e documentos importantes</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 text-left">{faq.question}</h3>
                  <span className="text-amber-600 text-xl ml-4">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
