import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { FontRenderer } from '../components/FontRenderer';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <FontRenderer rtl text="tec sa aruja, dem" translit="Tek sa Arujei-dem" size="92px" color="#fff" weight="900"/>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn More About Arusian
          </Link>
        </div>
        <hr/>
        <h2>Find Arusian Academy on Instagram</h2>
        <p>Scan the QR-Code below</p>
        <img src="/img/arusian_academy_qr.webp" alt="Instagram QR Code" style={{width: '200px', height: '200px'}} />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="
Arusian is a personal language. I created the language in 2009 and it has only ever grown and evolved since then.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
