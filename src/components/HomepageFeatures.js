import React from 'react';
import Link from '@docusaurus/Link';
import Icon from './Icons';
import styles from './HomepageFeatures.module.css';

const SECTIONS = [
  {
    icon: 'server', tone: 'blue', title: 'CHPC Guide', to: '/docs/CHPC_Guide/Getting_Started_at_CHPC',
    text: 'Accounts, login environment, Slurm jobs, job limits, data transfer, Globus, Rclone and the Protected Environment.',
    links: [['Getting started', '/docs/CHPC_Guide/Getting_Started_at_CHPC'], ['Running jobs', '/docs/CHPC_Guide/Submitting_and_Running_Jobs'], ['Transferring data', '/docs/CHPC_Guide/Transfering_Data']],
  },
  {
    icon: 'pipeline', tone: 'green', title: 'UCGD Pipeline', to: '/docs/UCGD-Pipeline/introduction',
    text: 'How projects move from FASTQ to analysis-ready variants, version by version.',
    links: [['Introduction', '/docs/UCGD-Pipeline/introduction'], ['Version 4', '/docs/UCGD-Pipeline/version_4']],
  },
  {
    icon: 'cloud', tone: 'purple', title: 'UCGD Cloud', to: '/docs/UCGD-Cloud/version_1',
    text: 'Running UCGD pipelines on AWS ParallelCluster with Nextflow, ECR and EFS.',
    links: [['Cloud pipeline', '/docs/UCGD-Cloud/version_1'], ['AMI setup', '/docs/UCGD-Cloud/ami_setup_guide'], ['VAR pipeline', '/docs/UCGD-Cloud/ucgd_var_pipeline_guide']],
  },
  {
    icon: 'folder', tone: 'red', title: 'UCGD Projects', to: '/docs/UCGD-Projects/setup',
    text: 'Setting up a new project with the UCGD core.',
    links: [['Project setup', '/docs/UCGD-Projects/setup']],
  },
  {
    icon: 'dataset', tone: 'teal', title: 'Public Datasets', to: '/docs/Public-Datasets/NIST',
    text: 'Reference truth sets and population data available to UCGD users.',
    links: [['NIST / GIAB', '/docs/Public-Datasets/NIST'], ['1000 Genomes', '/docs/Public-Datasets/1000G']],
  },
];

function Section({icon, tone, title, to, text, links}) {
  return (
    <div className={styles.card}>
      <Link to={to} className={styles.cover} aria-label={title} />
      <span className={styles.icon} data-tone={tone}><Icon name={icon} /></span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <ul className={styles.links}>
        {links.map(([label, href]) => (
          <li key={href}><Link to={href}>{label}</Link></li>
        ))}
      </ul>
      <span className={styles.go}><Icon name="arrow" size={18} /></span>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.grid}>
      {SECTIONS.map((s) => <Section key={s.title} {...s} />)}
    </div>
  );
}
