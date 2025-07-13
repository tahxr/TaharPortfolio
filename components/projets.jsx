import styles from '@/components/projets.module.css'
import Image from 'next/image'
import projet1 from '@/public/projet1.jpg'
import projet2 from '@/public/projet2.jpg'
import { useTranslations } from 'next-intl';

export default function Projets() {
    const t = useTranslations('projects');
    return (
        <section id="projets" className={styles.projectsSection}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={projet1}
                            alt="SpectaCite"
                            fill
                            
                        />
                    </div>
                    <h3 className={styles.projectTitle}>{t('projet1.title')} </h3>
                    <p>{t('projet1.description')}</p>
                    <a href="https://github.com/tonprofil/todo-app" target="_blank" className={styles.link}>{t('github')}</a>
                </div>

                <div className={styles.projectCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={projet2}
                            alt="Système de réservation"
                            fill
                        />
                    </div>
                    <h3 className={styles.projectTitle}>📅 {t('projet2.title')}</h3>
                    <p>{t('projet2.description')}</p>
                    <a href="https://github.com/tonprofil/reservation-system" target="_blank" className={styles.link}>{t('github')}</a>
                </div>
            </div>
        </section>
    );
}
