import Image from 'next/image';
import { useTranslations } from 'next-intl';
import projet1 from '@/public/projet1.jpg';
import projet2 from '@/public/projet2.jpg';

export default function Projets() {
  const t = useTranslations('projects');

  const projects = [
    {
      num: '01',
      image: projet1,
      alt: 'SpectaCité',
      title: t('projet1.title'),
      description: t('projet1.description'),
      github: 'https://github.com/tahxr/SpectaCit-',
      tech: ['Next.js', 'React', 'CSS'],
    },
    {
      num: '02',
      image: projet2,
      alt: 'Système de réservation',
      title: t('projet2.title'),
      description: t('projet2.description'),
      github: 'https://github.com/tahxr/livrable2',
      tech: ['Next.js', 'PostgreSQL', 'Node.js'],
    },
  ];

  return (
    <section id="projets" className="border-b border-[#1e1e1e] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <p className="text-[10px] tracking-[0.14em] uppercase text-[#444] mb-16">
          {t('title')}
        </p>

        {/* Projets */}
        <div className="flex flex-col gap-0">
          {projects.map(({ num, image, alt, title, description, github, tech }, i) => (
            <div
              key={num}
              className={`grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 ${
                i < projects.length - 1 ? 'border-b border-[#1e1e1e]' : ''
              } ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}
            >

              {/* Image */}
              <div className="relative h-72 md:h-auto overflow-hidden bg-[#111] group md:[direction:ltr]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />

                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#333] group-hover:text-[#888] transition-colors">
                  {num} —
                </span>
              </div>

              {/* Contenu */}
              <div className="p-10 md:p-14 flex flex-col justify-center md:[direction:ltr] border-l border-[#1e1e1e]">
                <span className="text-[10px] font-mono text-[#2a2a2a] mb-4">
                  {num} —
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-[#f0ede8] mb-4 leading-tight">
                  {title}
                </h3>

                <p className="text-[13px] text-[#555] leading-relaxed mb-8">
                  {description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {tech.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] px-3 py-1 border border-[#1e1e1e] text-[#333] rounded-full tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lien GitHub CORRIGÉ */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link self-start flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#444] hover:text-[#f0ede8] transition-colors duration-200"
                >
                  {t('github')}
                  <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                    ↗
                  </span>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}