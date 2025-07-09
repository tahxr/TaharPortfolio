import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/app/layout.module.css'

export default function LocaleLayout({ children, params }) {
  const { locale } = use(params); // Résolution de la promesse dans un composant fonctionnel
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  
  
  return (
    <html lang={locale} >
      <body className={styles.body}>
        <NextIntlClientProvider>
          <Header/>
          <main className={styles.main}>{children}</main>

          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
