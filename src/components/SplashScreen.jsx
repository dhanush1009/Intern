import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './SplashScreen.css';

const BRAND_LETTERS = ['S','H','A','N','R','U','C','K'];
const TECH_LETTERS  = ['T','E','C','H','N','O','L','O','G','I','E','S'];

export default function SplashScreen({ onDone }) {
  const [hiding, setHiding] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), 2800);
    const doneTimer = setTimeout(() => onDone(), 3500);

    // Count up from 0→100 over ~2.2s
    let start = null;
    const duration = 2200;
    const tick = (ts) => {
      if (!start) start = ts;
      const pct = Math.min(Math.floor(((ts - start) / duration) * 100), 100);
      setCounter(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(doneTimer);
      cancelAnimationFrame(raf);
    };
  }, [onDone]);

  return (
    <div className={`splash${hiding ? ' splash--hide' : ''}`}>

      {/* Corner brackets */}
      <span className="splash-corner splash-corner--tl" />
      <span className="splash-corner splash-corner--tr" />
      <span className="splash-corner splash-corner--bl" />
      <span className="splash-corner splash-corner--br" />

      {/* Background expanding rings */}
      <span className="splash-orb splash-orb--1" />
      <span className="splash-orb splash-orb--2" />
      <span className="splash-orb splash-orb--3" />

      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <span key={i} className={`spark spark--${i + 1}`} />
      ))}

      {/* Main content */}
      <div className="splash-card">

        {/* Scanner rings + logo */}
        <div className="splash-logo-scene">
          <span className="scan-ring scan-ring--1" />
          <span className="scan-ring scan-ring--2" />
          <span className="scan-ring scan-ring--3" />
          <span className="scan-dot scan-dot--top" />
          <span className="scan-dot scan-dot--right" />
          <span className="scan-dot scan-dot--bottom" />
          <span className="scan-dot scan-dot--left" />

          <div className="splash-logo-wrap">
            <img src={logo} alt="Shanruck Technologies" className="splash-logo" />
          </div>
        </div>

        {/* Letter-by-letter brand name */}
        <div className="splash-brand">
          <div className="brand-row brand-row--main">
            {BRAND_LETTERS.map((l, i) => (
              <span key={i} className="brand-letter" style={{ animationDelay: `${0.9 + i * 0.07}s` }}>{l}</span>
            ))}
          </div>
          <div className="brand-row brand-row--sub">
            {TECH_LETTERS.map((l, i) => (
              <span key={i} className="brand-letter brand-letter--pink" style={{ animationDelay: `${1.5 + i * 0.05}s` }}>{l}</span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="splash-tagline">Ignite Passion · Empower Careers</p>

        {/* Progress bar + counter */}
        <div className="splash-bar-wrap">
          <div className="splash-bar">
            <span className="splash-bar__fill" />
          </div>
          <span className="splash-counter">{counter}%</span>
        </div>

      </div>
    </div>
  );
}
