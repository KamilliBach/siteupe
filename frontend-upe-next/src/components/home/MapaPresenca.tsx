'use client';

import Link from 'next/link';

export default function MapaPresenca() {
  return (
    <section className="bg-white py-16" style={{ borderTop: '1px solid #EEEEEE', borderBottom: '1px solid #EEEEEE' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A4081' }}>
            Nossa Presença no Paraná
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: '#333333' }}>
            A UPE está presente em universidades de todo o estado, representando e lutando pelos direitos dos estudantes.
          </p>
        </div>

        <div className="rounded-lg p-8 mb-8" style={{ backgroundColor: '#E0F2F7', border: '1px solid rgba(26, 64, 129, 0.2)' }}>
          <div className="h-96 bg-white rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: '#EEEEEE' }}>
            <div className="text-center">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="font-medium text-lg" style={{ color: '#333333' }}>Carregando Mapa Interativo...</p>
              <p className="text-sm mt-2" style={{ color: '#666666' }}>Mapa interativo com as principais sedes da UPE no Paraná</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link 
            href="/institucional/gestao" 
            className="font-semibold text-lg transition-opacity hover:opacity-70"
            style={{ color: '#1A4081' }}
          >
            Ver Diretoria Completa →
          </Link>
        </div>
      </div>
    </section>
  );
}

