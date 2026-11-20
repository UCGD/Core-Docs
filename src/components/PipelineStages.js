import React from 'react';
import Link from '@docusaurus/Link';
import styles from './PipelineStages.module.css';

const STAGES = [
  {k: 'Input', f: 'FASTQ · BAM · CRAM', t: 'Sequencer output or existing alignments', to: '/docs/UCGD-Pipeline/introduction'},
  {k: 'Align & QC', f: 'CRAM', t: 'fastp, alignstats, peddy, goleft', to: '/docs/UCGD-Pipeline/version_3'},
  {k: 'Call', f: 'gVCF', t: 'DeepVariant per sample, plus Manta and Smoove SVs', to: '/docs/UCGD-Pipeline/version_3'},
  {k: 'Joint genotype', f: 'VCF', t: 'GLnexus across the cohort and background samples', to: '/docs/UCGD-Pipeline/version_3'},
  {k: 'Annotate', f: 'VCF', t: 'VEP and Calypso post-processing', to: '/docs/UCGD-Cloud/ucgd_calypso_pipeline_guide'},
  {k: 'Mosaic', f: 'Project', t: 'Results delivered for review and analysis', to: '/docs/UCGD-Pipeline/version_4'},
];

export default function PipelineStages() {
  return (
    <ol className={styles.pipe}>
      {STAGES.map((s, i) => (
        <li key={s.k} className={styles.stage}>
          <Link to={s.to} className={styles.card}>
            <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.name}>{s.k}</span>
            <span className={styles.file}>{s.f}</span>
            <span className={styles.text}>{s.t}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
