import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Identify Problems',
    Svg: require('@site/static/img/identify_problems.svg').default,
    description: (
      <>
        Surface bottlenecks, tech debt, and process gaps with quick
        diagnostics, flow metrics, and team signals.
      </>
    ),
  },
  {
    title: 'Solutions & Best Practices',
    Svg: require('@site/static/img/solution_best_practices.svg').default,
    description: (
      <>
        Implement robust source control, CI/CD pipelines, and
        automated testing to standardize delivery, reduce risk,
        and elevate quality.
      </>
    ),
  },
  {
    title: 'Continuous Improvement',
    Svg: require('@site/static/img/continuous-improvement.svg').default,
    description: (
      <>
        Use AI across code, pipelines, and telemetry to
        automate experiments, prioritize fixes, and continuously optimize delivery.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
