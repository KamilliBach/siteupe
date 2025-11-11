'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Blog Institucional
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-blue-600 transition-colors">
            Contato
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
              Blog
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              Sobre
            </Link>
            <Link href="/contato" className="block px-4 py-2 hover:bg-gray-100">
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
