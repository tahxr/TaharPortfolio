import styles from '@/components/Apropos.module.css'
import Image from 'next/image'
import pic from "../public/photo_profil.jpg"
import langIcon from '../public/language.png'
import educIcon from '../public/education.png'
import proIcon from '../public/project.png'
import { useTranslations } from 'next-intl';
export default function Apropos() {
  const t = useTranslations('apropos');
  return (
    <section id="apropos" className={styles.about}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.main}>
       
        <div className={styles.photo}>
          <Image src={pic} alt="Photo de profil" layout="responsive" />
        </div>

        
        <div className={styles.content}>
          <p className={styles.description}>
          {t('description')}
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              
              <div className={styles.cardTitle}><Image src={langIcon} alt="langue icon" width={24} height={24} /> {t('langages')}</div>
              <p>{t('langagesList')}</p>
            </div>
            <div className={styles.card}>
            
              <div className={styles.cardTitle}><Image src={educIcon} alt="education icon" width={24} height={24} /> {t('education')}</div>
              <ul>
                <li>
                  <p>{t('diplome1')}</p>
                </li>
                <li>
                  <p>{t('diplome2')}</p>
                </li>
              </ul>
              
              
            </div>
            <div className={styles.card}>
            
              <div className={styles.cardTitle}><Image src={proIcon} alt="project icon" width={24} height={24} /> {t('projects')}</div>
              <p>{t('projectsCount')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
