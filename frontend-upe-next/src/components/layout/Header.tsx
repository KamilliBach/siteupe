'use client';

import Link from 'next/link';
import { useState } from 'react';
import UPELogo from '../UPELogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b" style={{ borderColor: '#EEEEEE' }}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <UPELogo width={50} height={50} />
          <div className="hidden sm:block">
            <div className="text-sm font-bold" style={{ color: '#1A4081' }}>UPE</div>
            <div className="text-xs" style={{ color: '#666666' }}>Estudantes do Paraná</div>
          </div>
        </Link>

        <div className="hidden lg:flex space-x-6 text-sm items-center" style={{ color: '#333333' }}>
          <Link href="/" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#1A4081' }}>
            Home
          </Link>
          <Link href="/institucional" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
            Institucional
          </Link>
          <Link href="/noticias" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
            Notícias
          </Link>
          <Link href="/servicos" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
            Serviços
          </Link>
          <Link href="/blog" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
            Blog
          </Link>
          <div className="h-6 w-px" style={{ backgroundColor: '#EEEEEE' }}></div>
          <Link 
            href="/contato" 
            className="text-white px-5 py-2 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#1A4081' }}
          >
            Contato
          </Link>
        </div>

        <button
          className="lg:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden border-t" style={{ borderColor: '#EEEEEE' }}>
            <Link href="/" className="block px-4 py-3 border-b" style={{ color: '#333333', borderColor: '#EEEEEE', backgroundColor: '#E0F2F7' }}>
              Home
            </Link>
            <Link href="/institucional" className="block px-4 py-3 border-b hover:opacity-70 transition-opacity" style={{ color: '#333333', borderColor: '#EEEEEE' }}>
              Institucional
            </Link>
            <Link href="/noticias" className="block px-4 py-3 border-b hover:opacity-70 transition-opacity" style={{ color: '#333333', borderColor: '#EEEEEE' }}>
              Notícias
            </Link>
            <Link href="/servicos" className="block px-4 py-3 border-b hover:opacity-70 transition-opacity" style={{ color: '#333333', borderColor: '#EEEEEE' }}>
              Serviços
            </Link>
            <Link href="/blog" className="block px-4 py-3 border-b hover:opacity-70 transition-opacity" style={{ color: '#333333', borderColor: '#EEEEEE' }}>
              Blog
            </Link>
            <Link href="/contato" className="block px-4 py-3 border-b hover:opacity-70 transition-opacity" style={{ color: '#333333', borderColor: '#EEEEEE' }}>
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
