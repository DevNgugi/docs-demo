import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
  <header className={clsx('hero hero--primary', styles.heroBanner)}>
    
        <div className="container">
          <h1 className="hero__title">Welcome to Nairopay</h1>
          <p className="hero__subtitle">Everything you need to integrate and use Nairopay Checkout smoothly and securely.</p>
          <div style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start with User Guide
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/developer-guide/integration-overview" style={{marginLeft: '1rem'}}>
              Developer Guide
            </Link>
          </div>

        </div>
        
      </header>

       
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
