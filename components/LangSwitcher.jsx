'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './LangSwitcher.module.css'; 

const locales = ['fr', 'en'];

export default function LangSwitcher() {
    const pathname = usePathname();
    const basePath = pathname.replace(/^\/(fr|en)/, '') || '/';

    return (
        <div className={styles.langSwitcher}>
            {locales.map((locale) => (
                <Link
                    key={locale}
                    href={`/${locale}${basePath}`}
                    className={`${styles.langLink} ${pathname.startsWith(`/${locale}`) ? styles.active : ''
                        }`}
                >
                    {locale.toUpperCase()}
                </Link>
            ))}
        </div>
    );
}
