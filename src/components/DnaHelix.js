import React from 'react';
import styles from './DnaHelix.module.css';

// Horizontal double helix drawn as a decorative background layer.
// Deterministic base sequence so the server and browser render the same SVG.
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const PAIR = {A: 'T', T: 'A', C: 'G', G: 'C'};

export default function DnaHelix({className}) {
  const period = 300, turns = 9, amp = 72, step = 16, H = 220, mid = H / 2;
  const W = period * turns;
  const r = rng(7);
  const n = Math.floor(W / step) + 1;
  const strand = (phase) => {
    const pts = [];
    for (let x = 0; x <= W; x += 5) pts.push(`${x},${(mid + amp * Math.sin((x / period) * 2 * Math.PI + phase)).toFixed(1)}`);
    return pts.join(' ');
  };
  const rungs = Array.from({length: n}, (_, i) => {
    const b = 'ACGT'[Math.floor(r() * 4)];
    const x = i * step;
    const a = (x / period) * 2 * Math.PI;
    const y1 = mid + amp * Math.sin(a), y2 = mid + amp * Math.sin(a + Math.PI);
    const depth = (Math.cos(a) + 1) / 2;
    const m = (y1 + y2) / 2;
    return (
      <g key={i} opacity={0.2 + depth * 0.8}>
        <line x1={x} y1={y1} x2={x} y2={m} className={styles[`b${b}`]} />
        <line x1={x} y1={m} x2={x} y2={y2} className={styles[`b${PAIR[b]}`]} />
      </g>
    );
  });
  return (
    <div className={`${styles.wrap} ${className || ''}`} aria-hidden="true">
      <svg className={styles.svg} viewBox={`0 0 ${W / 2} ${H}`} preserveAspectRatio="xMidYMid slice">
        <g className={styles.scroll} style={{'--period': `${period}px`}}>
          {rungs}
          <polyline points={strand(0)} className={styles.strandA} />
          <polyline points={strand(Math.PI)} className={styles.strandB} />
        </g>
      </svg>
    </div>
  );
}
