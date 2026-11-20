import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Icon from './Icons';
import styles from './EstimatorCards.module.css';

// The estimators are standalone pages in static/estimators. They are linked with a
// plain <a> (not <Link>) so the browser loads the HTML file instead of a client route.

const TIERS = [['1–100', 80], ['101–500', 70], ['501–1k', 60], ['1k–2k', 40], ['2k+', 20]];
const CLASSES = [['S3 Standard', 23.55], ['Standard-IA', 12.8], ['Glacier Instant', 4.1], ['Glacier Flexible', 3.69], ['CHPC Pando', 2.88], ['Deep Archive', 1.01]];

function TierPreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.previewHead}><span>WGS rate per sample</span><span>by volume tier</span></div>
      <div className={styles.bars}>
        {TIERS.map(([label, v]) => (
          <div key={label} className={styles.barCol}>
            <span className={styles.barVal}>${v}</span>
            <span className={styles.bar} style={{height: `${(v / 80) * 100}%`}} />
            <span className={styles.barLbl}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoragePreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.previewHead}><span>Cost per TB-month</span><span>list price</span></div>
      <div className={styles.rows}>
        {CLASSES.map(([label, v]) => (
          <div key={label} className={styles.row}>
            <span className={styles.rowLbl}>{label}</span>
            <span className={styles.track}><span className={styles.fill} style={{width: `${Math.max(4, (v / 23.55) * 100)}%`}} /></span>
            <span className={styles.rowVal}>${v.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TOOLS = [
  {
    key: 'vc', icon: 'dna', tag: 'UCGD core facility rates', href: '/estimators/variant-calling.html',
    title: 'Variant Calling Estimator',
    text: 'Quote WGS, WES and joint genotyping projects with graduated volume tiers, analyst hours and extra storage.',
    points: ['Tier-by-tier breakdown and $230 minimum', 'Post-VCF analysis and custom development hours', 'Cost per sample at common project sizes', 'Copy-ready client summary'],
    Preview: TierPreview,
  },
  {
    key: 's3', icon: 'storage', tag: 'AWS S3 · CHPC Pando · Elm', href: '/estimators/s3-storage.html',
    title: 'S3 Storage Estimator',
    text: 'Compare every S3 storage class with CHPC archive storage, including retrieval, egress and PHI controls.',
    points: ['Storage, restore and egress for any term', 'PHI / HIPAA controls and DR copy', 'Restore times and download estimates', 'Generates CloudFormation and CLI bucket setup'],
    Preview: StoragePreview,
  },
];

function Tool({icon, tag, href, title, text, points, Preview}) {
  const url = useBaseUrl(href);
  return (
    <article className={styles.card}>
      <a href={url} className={styles.cover} aria-label={`Open the ${title}`} />
      <div className={styles.body}>
        <div className={styles.top}>
          <span className={styles.icon}><Icon name={icon} /></span>
          <span className={styles.tag}>{tag}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <ul className={styles.points}>
          {points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <a href={url} className={styles.cta}>Open estimator <Icon name="arrow" size={17} /></a>
      </div>
      <Preview />
    </article>
  );
}

export default function EstimatorCards() {
  return (
    <div className={styles.grid}>
      {TOOLS.map(({key, ...t}) => <Tool key={key} {...t} />)}
    </div>
  );
}
