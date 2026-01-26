import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/app/layout.module.css';
import '../globals.css';
import { getMessages } from 'next-intl/server';

import Providers from '@/components/Providers';

import { Roboto, Poppins } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-poppins',
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${roboto.variable} ${poppins.variable}`}
    >
      <body className={styles.body}>
        <Providers locale={locale} messages={messages}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
