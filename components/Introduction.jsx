'use client';

import Image from "next/image";
import pic from "../public/photo.png"
import downloadIcon from "@/public/download.png";
import styles from "./Introduction.module.css";
import { useTranslations, useLocale } from 'next-intl';

export default function Introduction() {
  const t = useTranslations('intro');
  const locale = useLocale();

  // Déterminer le fichier PDF à télécharger selon la langue
  const cvUrl = locale === 'fr' ? '/OURDANI_Tahar_CV_ FR.pdf' : '/OURDANI_Tahar_CV_ EN.pdf';

  return (
    <section className={styles.container}>
     <Image
        src="/photo.png" 
        alt="Photo de profil"
        className={styles.avatar}
        width={160}
        height={160}
      />

      <h3 className={styles.name}>{t('hello')}</h3>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.description}>
        {t('description')}
      </p>

      <a href={cvUrl} download className={styles.cvButton}>
        {t('cv')}
        <Image
          src={downloadIcon}
          alt="Icône de téléchargement"
          className={styles.cvIcon}
        />
      </a>
    </section>
  );
}
