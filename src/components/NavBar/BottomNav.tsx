'use client';

import Link from 'next/link';
import { useState } from 'react';

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/' },
  { label: 'Blog', href: '/' },
  { label: 'Produtos', href: '/' },
  { label: 'Fale Conosco', href: '/' },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className='w-full border-b border-slate-600 bg-slate-800 py-4'>
      <div className='flex w-full items-center justify-between px-[8%] text-slate-100 lg:px-[16%]'>
        {/* Logo mobile */}
        <Link
          href='/'
          className='font-audiowide text-3xl font-bold text-white lg:hidden'
        >
          Ferra<span className='text-amber-500'>Mentas</span>
        </Link>

        {/* Menu desktop */}
        <nav className='hidden items-center gap-8 lg:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='font-golos flex items-center gap-2 font-bold text-slate-100 transition-colors hover:text-amber-500'
            >
              <span>{link.label}</span>
              <span className='text-slate-400'>+</span>
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <button
          type='button'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='text-2xl text-white lg:hidden'
          aria-label='Abrir menu'
        >
          <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className='mt-3 border-t border-slate-700 bg-slate-800 lg:hidden'>
          <nav className='flex flex-col px-[6%] py-4'>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className='font-golos flex items-center justify-between border-b border-slate-700 px-2 py-3 font-semibold text-slate-100 transition-colors hover:text-amber-500'
              >
                <span>{link.label}</span>
                <span className='text-slate-400'>+</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
