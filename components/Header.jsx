'use client';

import { useTranslations,useLocale} from 'next-intl';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import styles from '@/components/Header.module.css';
import LangSwitcher from './LangSwitcher';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('header');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => closeMenu();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) closeMenu();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <h1>{t('title')}</h1>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><Link href={`/${locale}/`} onClick={closeMenu}>{t('home')}</Link></li>
          <li><Link href={`/${locale}/#apropos`} onClick={closeMenu}>{t('about')}</Link></li>
          <li><Link href={`/${locale}/#projets`} onClick={closeMenu}>{t('projects')}</Link></li>
          <li><Link href={`/${locale}/contact`} onClick={closeMenu}>{t('contact')}</Link></li>
          <LangSwitcher/>
        </ul>
      </nav>

      <div className={styles.burger} onClick={toggleMenu}>
        <div></div><div></div><div></div>
      </div>

      <div ref={menuRef} className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
        <Link href="/" onClick={closeMenu}>{t('home')}</Link>
        <Link href="/#apropos" onClick={closeMenu}>{t('about')}</Link>
        <Link href="/#projets" onClick={closeMenu}>{t('projects')}</Link>
        <Link href="/contact" onClick={closeMenu}>{t('contact')}</Link>
      </div>
    </header>
  );
}
