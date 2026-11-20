import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import EstimatorCards from '../components/EstimatorCards';
import Icon from '../components/Icons';
import DnaHelix from '../components/DnaHelix';
import ServerRacks from '../components/ServerRacks';
import PipelineStages from '../components/PipelineStages';
import styles from './index.module.css';

const QUICK = [
  ['Get a CHPC account', 'Access, Duo and first login', '/docs/CHPC_Guide/Getting_Started_at_CHPC'],
  ['Set up your environment', 'UCGD modules, paths and aliases', '/docs/CHPC_Guide/Setup_UCGD_login_environment'],
  ['Move data in and out', 'Transfer nodes, Globus and Rclone', '/docs/CHPC_Guide/Transfering_Data'],
  ['Understand the pipeline', 'From FASTQ to variants', '/docs/UCGD-Pipeline/introduction'],
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <ServerRacks />
      <DnaHelix />
      <div className={`container ${styles.heroInner}`}>
        <div>
          <p className={styles.eyebrow}>
            <span className={styles.dots} aria-hidden="true"><i /><i /><i /><i /></span>
            Utah Center for Genetic Discovery
          </p>
          <h1 className={styles.title}>
            <span className={styles.lU}>U</span><span className={styles.lC}>C</span><span className={styles.lG}>G</span><span className={styles.lD}>D</span> <span className={styles.grad}>Core</span>
          </h1>
          <p className={styles.lead}>
            How to compute, store and analyze genomic data with the UCGD core: CHPC access, the UCGD
            pipeline, cloud processing, and cost estimates for your next project.
          </p>
          <div className={styles.actions}>
            <Link className={styles.btnPrimary} to="/docs/Homepage">
              Read the documentation <Icon name="arrow" size={18} />
            </Link>
            <Link className={styles.btnGhost} to="/estimators">Cost estimators</Link>
          </div>
        </div>

        <nav className={styles.quick} aria-label="Quick start">
          <div className={styles.quickHead}>
            <span>Quick start</span>
            <img src={useBaseUrl('img/logo.svg')} alt="" width="30" height="28" />
          </div>
          <ol className={styles.quickList}>
            {QUICK.map(([t, d, to], i) => (
              <li key={to}>
                <Link to={to} className={styles.quickItem}>
                  <span className={styles.quickNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.quickText}><strong>{t}</strong><span>{d}</span></span>
                  <Icon name="arrow" size={16} className={styles.quickArrow} />
                </Link>
              </li>
            ))}
          </ol>
          <p className={styles.quickFoot}>{siteConfig.tagline}</p>
        </nav>
      </div>
    </header>
  );
}

function SectionHead({kicker, title, children}) {
  return (
    <div className={styles.sectionHead}>
      <p className={styles.kicker}>{kicker}</p>
      <h2 className={styles.h2}>{title}</h2>
      {children && <p className={styles.sub}>{children}</p>}
    </div>
  );
}

const ACTIONS = [
  {icon: 'plus', title: 'Request a UCGD project', text: 'Start a new project request in Mosaic.', href: 'https://mosaic.chpc.utah.edu/#/projects/new'},
  {icon: 'user', title: 'Create a user account', text: 'Request access to UCGD resources.', href: 'https://redcap.link/ucgd_users'},
  {icon: 'chat', title: 'Improve these docs', text: 'Missing or out of date? Open an issue.', href: 'https://github.com/UCGD/Core-Docs/issues'},
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <section className={styles.section}>
          <div className="container">
            <SectionHead kicker="The pipeline" title="From reads to reviewed variants">
              Every UCGD project follows the same automated path, orchestrated with Nextflow inside the CHPC Protected
              Environment.
            </SectionHead>
            <PipelineStages />
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <SectionHead kicker="Documentation" title="Everything in one place">
              Guides maintained by the UCGD team, from your first CHPC login to running the pipeline in the cloud.
            </SectionHead>
            <HomepageFeatures />
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHead kicker="Estimators" title="Price a project before it starts">
              Interactive calculators built on published UCGD, CHPC and AWS rates. Adjust the inputs, then copy a
              client-ready summary.
            </SectionHead>
            <EstimatorCards />
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.actionsGrid}>
              {ACTIONS.map((a) => (
                <a key={a.title} className={styles.action} href={a.href} target="_blank" rel="noopener noreferrer">
                  <span className={styles.actionIcon}><Icon name={a.icon} /></span>
                  <span>
                    <strong>{a.title}</strong>
                    <span>{a.text}</span>
                  </span>
                  <Icon name="arrow" size={18} className={styles.actionArrow} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
