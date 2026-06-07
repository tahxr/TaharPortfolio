'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import LangSwitcher from './LangSwitcher';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('header');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = [
    { href: `/${locale}/`, label: t('home') },
    { href: `/${locale}/#apropos`, label: t('about') },
    { href: `/${locale}/#projets`, label: t('projects') },
    { href: `/${locale}/#contact`, label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link href={`/${locale}/`} className="text-[13px] font-bold tracking-wider text-[#f0ede8] uppercase">
          Portfolio
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className="text-[11px] tracking-widest uppercase text-[#555] hover:text-[#f0ede8] transition-colors duration-200">
              {label}
            </Link>
          ))}
          <LangSwitcher />
        </nav>

        {/* Burger mobile */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(p => !p)}>
          <span className={`block w-5 h-px bg-[#f0ede8] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[#f0ede8] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#f0ede8] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div ref={menuRef} className={`md:hidden bg-[#0d0d0d] border-t border-[#1e1e1e] overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 gap-5">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-widest uppercase text-[#555] hover:text-[#f0ede8] transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}