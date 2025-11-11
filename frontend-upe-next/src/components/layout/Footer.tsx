export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sobre</h3>
            <p className="text-gray-400">
              Blog institucional com informações, notícias e artigos relevantes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-400">Email: contato@instituicao.com</p>
            <p className="text-gray-400">Telefone: (00) 0000-0000</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Instituição. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
