'use client';

import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import TechIllustration from './TechIllustration';

export default function Introduction() {
  const t = useTranslations('intro');
  const locale = useLocale();

  const cvUrl =
    locale === 'fr'
      ? '/OURDANI_Tahar_CV_FR.pdf'
      : '/OURDANI_Tahar_CV_EN.pdf';

  return (
    <section className="min-h-screen pt-14 border-b border-[#1e1e1e]">

      {/* Styles animation */}
      <style>{`
        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 8px 2px rgba(168, 85, 247, 0.4),
                        0 0 20px 4px rgba(168, 85, 247, 0.15);
            border-color: rgba(168, 85, 247, 0.6);
          }
          50% {
            box-shadow: 0 0 16px 4px rgba(168, 85, 247, 0.7),
                        0 0 40px 8px rgba(168, 85, 247, 0.25);
            border-color: rgba(168, 85, 247, 1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .cv-btn {
          position: relative;
          animation: borderGlow 2s ease-in-out infinite;
          border: 1px solid rgba(168, 85, 247, 0.6);
          background: transparent;
          overflow: hidden;
        }

        .cv-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(168, 85, 247, 0.15) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }

        .cv-btn:hover {
          animation: none;
          box-shadow:
            0 0 24px 6px rgba(168, 85, 247, 0.6),
            0 0 60px 12px rgba(168, 85, 247, 0.3);
          border-color: rgba(168, 85, 247, 1);
          background: rgba(168, 85, 247, 0.1);
        }

        .cv-btn span {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-start">

        {/* Texte gauche */}
        <div>
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#444] mb-6">
            {t('role')}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#f0ede8] mb-6">
            {t('title')}
          </h1>

          <p className="text-[13px] text-[#555] leading-relaxed max-w-md mb-10">
            {t('description')}
          </p>

          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/#projets`}
              className="px-6 py-3 bg-[#f0ede8] text-[#0d0d0d] text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-white transition-colors"
            >
              {t('seeProjects')}
            </Link>

            {/* Bouton CV */}
            <a
              href={cvUrl}
              download
              className="cv-btn px-6 py-3 text-purple-400 text-[11px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
            >
              <span>{t('cv')} ↓</span>
            </a>
          </div>
        </div>

        {/* Photo droite */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[300px] h-[300px]">

            {/* Glow */}
            <div className="absolute inset-0 -m-24 z-0">
              <Image
                src="/me-glow.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Personnage */}
            <Image
              src="/mee.png"
              alt="Tahar Ourdani"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-500 tracking-wide uppercase">
              {t('available')}
            </span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center gap-12">

          <p className="text-xl md:text-2xl text-center text-[#888] max-w-2xl leading-relaxed">
            {t('lookingFor')}{' '}
            <span className="text-purple-400">
              {t('crossFunctional')}
            </span>
            <br />
            <span className="text-sm text-[#555]">
              {t('lookingForSub')}
            </span>
          </p>

          <TechIllustration />
        </div>
      </div>

      {/* Technologies */}
      <div className="border-t border-[#1e1e1e] px-6 py-3 flex gap-12 overflow-hidden max-w-6xl mx-auto">
        {[
          'Next.js',
          'React',
          'TailwindCSS',
          'TypeScript',
          'Node.js',
          'PostgreSQL'
        ].map((tech, i) => (
          <span
            key={tech}
            className="text-[10px] text-[#333] tracking-widest uppercase whitespace-nowrap"
          >
            <span className="text-[#222] mr-2">
              0{i + 1}
            </span>
            {tech}
          </span>
        ))}
      </div>

    </section>
  );
}