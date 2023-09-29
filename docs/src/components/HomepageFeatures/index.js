import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_bixe_mountain.svg').default,
    description: (
      <>
        BiXE is familiar to anyone who has used redux, and easily understood.
      </>
    ),
  },
  {
    title: 'Truly Reuse Business Logic Everywhere',
    Svg: require('@site/static/img/undraw_bixe_tree.svg').default,
    description: (
      <>
        BiXE is completely framework agnostic. Once your business logic is written, it can be used in 
        ANY JavaScript or TypeScript application, allowing your teams to develop their applications in
        whatever framework, with whatever library suits them best.
      </>
    ),
  },
  {
    title: 'Powered by RxJS',
    Svg: require('@site/static/img/undraw_bixe_rxjs.svg').default,
    description: (
      <>
        Built with superfast RxJS, you never need to question speed, durability, or reliability.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
