export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white mt-16" style={{ backgroundColor: '#1A4081' }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4CAF50' }}>Sobre</h3>
            <p style={{ color: '#E0F2F7' }}>
              UPE - União Paranaense dos Estudantes. Representando e lutando pelos direitos dos estudantes do Paraná.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4CAF50' }}>Seções</h3>
            <ul style={{ color: '#E0F2F7' }} className="space-y-2 text-sm">
              <li>
                <a href="/institucional" className="hover:opacity-70 transition-opacity">
                  Institucional
                </a>
              </li>
              <li>
                <a href="/noticias" className="hover:opacity-70 transition-opacity">
                  Notícias
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:opacity-70 transition-opacity">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/Conhe�a" className="hover:opacity-70 transition-opacity">
                  Conhe�a
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4CAF50' }}>Recursos</h3>
            <ul style={{ color: '#E0F2F7' }} className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="hover:opacity-70 transition-opacity">
                  Blog
                </a>
              </li>
              <li>
                <a href="/institucional/historia" className="hover:opacity-70 transition-opacity">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:opacity-70 transition-opacity">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4CAF50' }}>Contato</h3>
            <p style={{ color: '#E0F2F7' }} className="text-sm mb-2">Email: contato@upe.org</p>
            <p style={{ color: '#E0F2F7' }} className="text-sm">Telefone: (41) 0000-0000</p>
          </div>
        </div>

        <div className="pt-8 text-center" style={{ borderTop: '1px solid #0F2654', color: '#E0F2F7' }}>
          <p>&copy; {currentYear} UPE - União Paranaense dos Estudantes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

