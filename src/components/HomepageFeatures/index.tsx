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
    title: 'The Language of Science and Nature',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Arusian is a personal language. I created the language in 2009 and it has only ever grown and evolved since then.
      </>
    ),
  },
  {
    title: 'Usage',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I use the language to describe ideas or concepts that do not exist my native languages, write secret notes and messages, and I write poetry and literature in it as well; along with the artwork I do.
      </>
    ),
  },
  {
    title: 'Where is Arusian spoken?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Arusian is mostly spoken in Arusia (of course!), 
        a fictional country in Mred, and also as a second language in Dietsland. 
        In real life, it is spoken fluently by its creator and some of his friends 
        have some knowledge of it.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/*<div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>*/}
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
