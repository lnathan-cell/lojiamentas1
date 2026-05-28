'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MiddleNav() {
  const [query, setQuery] = useState('');
  return (
    <div className='relative w-full bg-slate-700'>
      <div className='flex items-center justify-between gap-6 px-[8%] py-4 lg:px-[16%]'>
        {/* Logo */}
        <Link
          href='/'
          className='font-audiowide text-4xl font-bold text-white lg:text-5xl'
        >
          Ferra<span className='text-amber-500'>Mentas</span>
        </Link>

        {/* Search Box */}
        <div className='relative flex flex-1 lg:max-w-3xl'>
          <input
            type='text'
            placeholder='Busque por um produto ou marca'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full rounded-md bg-white px-5 py-4 pr-14 text-sm text-slate-900 outline-none placeholder:text-slate-500'
          />
          <button
            type='button'
            aria-label='Buscar'
            className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-slate-900'
          >
            <i className='bi bi-search'></i>
          </button>
        </div>
        {/* Contact */}
        <div className='flex items-center gap-3 text-slate-100'>
          <Image
            src='/suporte.png'
            alt='Descrição do contato'
            width={50}
            height={50}
          />
          <div className='flex flex-col'>
            <h2 className='font-golos ps-2 text-xs font-semibold tracking-wide'>SUPORTE</h2>
            <h1 className='font-golos font-semibold'>12 9999-5555</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
