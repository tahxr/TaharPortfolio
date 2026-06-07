'use client';

import { useEffect, useRef } from 'react';

const pills = [
  { label: 'React',       color: '#61dafb', text: '#93c5fd',  style: { top: '38px',    left: '50%',  transform: 'translateX(-50%)' } },
  { label: 'JavaScript',  color: '#f7df1e', text: '#fde68a',  style: { top: '82px',    left: '18%'  } },
  { label: 'TypeScript',  color: '#3b82f6', text: '#93c5fd',  style: { top: '82px',    right: '18%' } },
  { label: 'Next.js',     color: '#a78bfa', text: '#c4b5fd',  style: { top: '170px',   left: '5%'   } },
  { label: 'Node.js',     color: '#34d399', text: '#6ee7b7',  style: { top: '170px',   right: '5%'  } },
  { label: 'HTML / CSS',  color: '#fb923c', text: '#fdba74',  style: { top: '260px',   left: '2%'   } },
  { label: 'Tailwind',    color: '#ec4899', text: '#f9a8d4',  style: { top: '260px',   right: '2%'  } },
  { label: 'Python',      color: '#ff9a00', text: '#fcd34d',  style: { bottom: '170px',left: '5%'   } },
  { label: 'PostgreSQL',  color: '#4db33d', text: '#86efac',  style: { bottom: '170px',right: '5%'  } },
  { label: 'Express',     color: '#888',    text: '#d1d5db',  style: { bottom: '82px', left: '18%'  } },
  { label: 'Figma',       color: '#ff61f6', text: '#f0abfc',  style: { bottom: '82px', right: '18%' } },
  { label: 'Git / GitHub',color: '#a78bfa', text: '#c4b5fd',  style: { bottom: '38px', left: '50%', transform: 'translateX(-50%)' } },
];

export default function TechIllustration() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    for (let i = 0; i < 70; i++) {
      const s = document.createElement('div');
      const sz = Math.random() * 1.8 + 0.6;
      s.style.cssText = `
        position:absolute;border-radius:50%;background:#fff;
        width:${sz}px;height:${sz}px;
        top:${Math.random() * 100}%;left:${Math.random() * 100}%;
        opacity:${Math.random() * 0.4 + 0.08};
        animation:twinkle ${2 + Math.random() * 5}s ${Math.random() * 4}s ease-in-out infinite;
        pointer-events:none;
      `;
      scene.appendChild(s);
    }
  }, []);

  return (
    <div ref={sceneRef} className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: 520, background: '#050510' }}>
      <style>{`
        @keyframes twinkle{0%,100%{opacity:.1}50%{opacity:.7}}
        @keyframes drift{0%,100%{transform:translate(-50%,-50%)}50%{transform:translate(-50%,-52%)}}
        @keyframes orbitA{from{transform:translate(-50%,-50%) rotateX(70deg) rotate(0deg)}to{transform:translate(-50%,-50%) rotateX(70deg) rotate(360deg)}}
        @keyframes orbitB{from{transform:translate(-50%,-50%) rotateX(70deg) rotate(0deg)}to{transform:translate(-50%,-50%) rotateX(70deg) rotate(-360deg)}}
        @keyframes orbitC{from{transform:translate(-50%,-50%) rotateX(70deg) rotate(0deg)}to{transform:translate(-50%,-50%) rotateX(70deg) rotate(360deg)}}
        @keyframes pillPulse{0%,100%{box-shadow:0 0 0 0 rgba(139,92,246,0)}50%{box-shadow:0 0 12px 2px rgba(139,92,246,.2)}}
      `}</style>

      {/* Orbites */}
      {[
        { w: 210, h: 76,  anim: 'orbitA 12s linear infinite' },
        { w: 340, h: 122, anim: 'orbitB 20s linear infinite' },
        { w: 470, h: 168, anim: 'orbitC 30s linear infinite' },
      ].map(({ w, h, anim }, i) => (
        <div key={i} className="absolute top-1/2 left-1/2 rounded-[50%]"
          style={{ width: w, height: h, border: `1px solid rgba(139,92,246,${0.25 - i * 0.06})`, animation: anim }} />
      ))}

      {/* Halo SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[3]" viewBox="0 0 680 520">
        <defs>
          <radialGradient id="halo" cx="50%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity=".4"/>
            <stop offset="55%" stopColor="#4c1d95" stopOpacity=".12"/>
            <stop offset="100%" stopColor="#050510" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="340" cy="260" rx="210" ry="210" fill="url(#halo)"/>
      </svg>

      {/* Pills */}
      {pills.map(({ label, color, text, style }) => (
        <div key={label} className="absolute flex items-center gap-1.5 px-3.5 py-1.5 rounded-full z-[15] cursor-default transition-all duration-200 hover:border-purple-400"
          style={{ ...style, background: 'rgba(8,4,24,.9)', border: '1px solid rgba(139,92,246,.28)', fontFamily: 'monospace', fontSize: 11, fontWeight: 700, animation: 'pillPulse 4s ease-in-out infinite' }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          <span style={{ color: text }}>{label}</span>
        </div>
      ))}

      {/* Core */}
      <div className="absolute top-1/2 left-1/2 z-20" style={{ animation: 'drift 5s ease-in-out infinite' }}>
        <div className="w-[118px] h-[118px] rounded-full flex items-center justify-center"
          style={{ background: '#0a0420', border: '1px solid rgba(139,92,246,.5)', boxShadow: '0 0 50px rgba(109,40,217,.55),0 0 100px rgba(109,40,217,.2),inset 0 0 30px rgba(109,40,217,.25)' }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: '#130830', border: '1px solid rgba(167,139,250,.45)', boxShadow: '0 0 24px rgba(139,92,246,.7)' }}>
            <span style={{ color: '#e9d5ff', fontFamily: 'monospace', fontSize: 20, fontWeight: 700, letterSpacing: -2 }}>Tech</span>
          </div>
        </div>
      </div>
    </div>
  );
}