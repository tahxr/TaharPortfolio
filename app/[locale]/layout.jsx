import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/app/layout.module.css';
import '../globals.css';
import { getMessages } from 'next-intl/server';

import { Roboto, Poppins } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-poppins',
});

export default function LocaleLayout({ children, params }) {
  const { locale } = use(params);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = use(getMessages({ locale })); 

  return (
    <html lang={locale} className={`${roboto.variable} ${poppins.variable}`}>
      <body className={styles.body} >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
