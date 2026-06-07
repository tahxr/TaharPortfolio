'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['fr', 'en'];

export default function LangSwitcher() {
  const pathname = usePathname();
  const basePath = pathname.replace(/^\/(fr|en)/, '') || '/';
  const currentLocale = locales.find(l => pathname.startsWith(`/${l}`));

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${basePath}`}
          className={`text-[11px] tracking-widest uppercase px-2 py-1 transition-colors duration-200 ${
            currentLocale === locale
              ? 'text-[#f0ede8] font-bold'
              : 'text-[#444] hover:text-[#888]'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}