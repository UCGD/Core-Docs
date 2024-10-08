import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    /// Images found on https://undraw.co
    title: 'Review our Documentation.',
    Svg: require('../../static/img/docs.svg').default,
    description: (
      <>
        Review our <a href="https://ucgd.github.io/Core-Docs/docs/Homepage" target="_blank">documentation</a> covering a variety of topics including CHPC access, Project setup and Pipeline processing.
      </>
    ),
  },
  {
    title: 'Request a UCGD Project',
    Svg: require('../../static/img/project_request.svg').default,
    description: (
      <>
        Here you can fill out a <a href="https://mosaic.chpc.utah.edu/#/projects/new" target="_blank">UCGD Project</a> request form.
      </>
    ),
  },
  {
    title: 'Create a UCGD User account.',
    Svg: require('../../static/img/user_request.svg').default,
    description: (
      <>
        Here you can fill out a <a href="https://redcap.link/ucgd_users" target="_blank">UCGD User Account</a> request form.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
