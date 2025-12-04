'use client';

import { useState } from 'react';

export default function Conhe�aPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    volunteer: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', volunteer: false });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-purple-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Conhe�a</h1>
          <p className="text-purple-100 text-lg">Faça parte de nossa comunidade</p>
        </div>
      </section>

      <main className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Por Que Participar?</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-lg mb-2">Comunidade</h3>
                <p className="text-gray-600">
                  Conecte-se com pessoas que compartilham seus valores e interesses
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-lg mb-2">Aprendizado</h3>
                <p className="text-gray-600">
                  Conhe�a de workshops, seminários e eventos educativos
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="font-bold text-lg mb-2">Impacto Social</h3>
                <p className="text-gray-600">
                  Contribua para transformações positivas na sociedade
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-lg mb-2">Desenvolvimento</h3>
                <p className="text-gray-600">
                  Desenvolva novas habilidades e amplie seus horizontes
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Manifeste Seu Interesse</h2>

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
                ✓ Obrigado! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="mb-6">
                <label className="block font-semibold text-gray-900 mb-2">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-gray-900 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-gray-900 mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="volunteer"
                    checked={formData.volunteer}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600"
                  />
                  <span className="ml-3 text-gray-900">
                    Tenho interesse em ser voluntário
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

