'use client';

import { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de envio de emails
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-blue-100 text-lg">Estamos aqui para ajudar. Fale conosco!</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-xl font-bold mb-4">Endereço</h3>
              <p className="text-gray-700">
                Rua Exemplo, 123
                <br />
                São Paulo, SP 01234-567
                <br />
                Brasil
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Telefone</h3>
              <p className="text-gray-700">
                Geral: (11) 0000-0000
                <br />
                WhatsApp: (11) 99999-9999
                <br />
                Horário: 9h às 18h
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-700">
                Geral: contato@instituicao.com
                <br />
                Suporte: suporte@instituicao.com
                <br />
                RH: rh@instituicao.com
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
                ✓ Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Mapa */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Localização</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center border border-gray-300">
              <p className="text-gray-600 text-center">
                Integre um mapa aqui (Google Maps, Leaflet, etc.)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

