import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Apropos() {
  const t = useTranslations('apropos');

  const cards = [
    { num: '01', title: t('langages'), content: t('langagesList') },
    { num: '02', title: t('education'), content: `${t('diplome1')} — ${t('diplome2')}` },
    { num: '03', title: t('projects'), content: t('projectsCount') },
  ];

  return (
    <section id="apropos" className="border-b border-[#1e1e1e] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Grid photo + texte */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-center mb-16">

          {/* Photo avec halo mauve */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Halo mauve */}
              <div className="absolute inset-0 rounded-2xl bg-purple-600 opacity-30 blur-2xl scale-110 z-0" />
              {/* Image */}
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden border border-purple-900/40 z-10">
                <Image
                  src="/picofme.png"
                  alt="Tahar"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Texte */}
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#444] mb-6">{t('title')}</p>
            <p className="text-[15px] text-[#888] leading-relaxed mb-10">{t('description')}</p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'Python', 'HTML/CSS', 'React', 'Next.js', 'SQL'].map(s => (
                <span key={s} className="text-[10px] px-3 py-1.5 border border-[#222] text-[#444] rounded-full tracking-wider uppercase hover:border-purple-800 hover:text-purple-400 transition-colors duration-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards infos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(({ num, title, content }) => (
            <div key={num} className="p-8 rounded-2xl border border-[#1e1e1e] bg-[#111] hover:border-purple-900/60 transition-colors duration-300">
              <span className="text-[10px] text-[#2a2a2a] font-mono">{num} —</span>
              <p className="text-[11px] tracking-widest uppercase text-[#f0ede8] font-bold mt-3 mb-2">{title}</p>
              <p className="text-[12px] text-[#444] leading-relaxed">{content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}