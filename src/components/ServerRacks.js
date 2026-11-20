import React from 'react';
import styles from './ServerRacks.module.css';

// Decorative wall of server racks for the homepage hero.
// Layout and light pattern come from a fixed seed so every render is identical.
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const LED = ['g', 'g', 'g', 'g', 't', 'b', 'a']; // mostly green, some teal, blue and amber

export default function ServerRacks() {
  const r = rng(3);
  const W = 1440, H = 620, n = 7, rackW = 190, gap = 26, units = 34, top = 40, uh = 15.5;
  const left = (W - (n * rackW + (n - 1) * gap)) / 2;
  const racks = [];
  for (let i = 0; i < n; i++) {
    const x = left + i * (rackW + gap);
    const parts = [<rect key="frame" x={x} y={top - 14} width={rackW} height={units * uh + 28} rx={6} className={styles.rack} />];
    for (let u = 0; u < units; u++) {
      const y = top + u * uh;
      parts.push(<rect key={`u${u}`} x={x + 10} y={y + 1.5} width={rackW - 20} height={uh - 3} rx={1.5} className={styles.unit} />);
      if (r() < 0.6) {
        for (let d = 0; d < 6; d++) parts.push(<rect key={`d${u}-${d}`} x={x + 16 + d * 13} y={y + 4} width={10} height={uh - 8} rx={1} className={styles.bay} />);
      } else {
        for (let v = 0; v < 10; v++) parts.push(<line key={`v${u}-${v}`} x1={x + 16 + v * 8} y1={y + 4} x2={x + 16 + v * 8} y2={y + uh - 4} className={styles.vent} />);
      }
      for (let l = 0; l < 3; l++) {
        if (r() < 0.7) {
          const c = LED[Math.floor(r() * LED.length)];
          const blink = r() < 0.45;
          const style = blink ? {animationDuration: `${(0.6 + r() * 2.8).toFixed(2)}s`, animationDelay: `${(-r() * 4).toFixed(2)}s`} : undefined;
          parts.push(<circle key={`l${u}-${l}`} cx={x + rackW - 22 - l * 9} cy={y + uh / 2} r={2.2}
            className={`${styles.led} ${styles[c]} ${blink ? styles.blink : ''}`} style={style} />);
        }
      }
    }
    racks.push(<g key={i}>{parts}</g>);
  }
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg className={styles.svg} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ucgd-floor-glow" cx="50%" cy="0%" r="70%">
            <stop offset="0" stopColor="#4fe3d6" stopOpacity=".28" />
            <stop offset="1" stopColor="#4fe3d6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x={0} y={top + units * uh + 14} width={W} height={H - (top + units * uh + 14)} fill="url(#ucgd-floor-glow)" />
        {racks}
      </svg>
    </div>
  );
}
