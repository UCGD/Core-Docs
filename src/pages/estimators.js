import React from 'react';
import Layout from '@theme/Layout';
import EstimatorCards from '../components/EstimatorCards';
import styles from './estimators.module.css';

export default function Estimators() {
  return (
    <Layout title="Cost estimators" description="Interactive UCGD cost estimators for variant calling and genomic data storage.">
      <header className={styles.head}>
        <div className="container">
          <p className={styles.kicker}>Estimators</p>
          <h1 className={styles.title}>Cost estimators</h1>
          <p className={styles.lead}>
            Interactive calculators for scoping UCGD projects. Each runs entirely in your browser, uses published rates you
            can review and edit, and produces a plain-text summary ready to paste into an email or quote.
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <EstimatorCards />
          <div className={styles.notes}>
            <div>
              <h2>Before you send a quote</h2>
              <p>
                Estimates are planning figures, not invoices. Confirm current rates on the UCGD core facility, CHPC and AWS
                pricing pages, and check scope with a UCGD analyst before quoting a fixed amount.
              </p>
            </div>
            <div>
              <h2>Editing rates</h2>
              <p>
                Each estimator has a “Pricing assumptions” panel. Changes are saved in your browser only, so other people
                still see the published defaults. Use “Reset to default rates” to return to them.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
