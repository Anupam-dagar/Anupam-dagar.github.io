import React from 'react';
import Particles from 'react-particles-js';
import { Helmet } from 'react-helmet';
import styles from './index.module.css';
import About from '../components/about';
import Links from '../components/links';
import Footer from '../components/footer';
import particleOptions from '../../assets/particles.json';

export default () => (
  <> 
    <Helmet htmlAttributes={{ lang : 'en' }}>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <title>Anupam Dagar - Full Stack Developer</title>
      <meta name="title" content="Anupam Dagar - Full Stack Developer" />
      <meta name="description" content="Hi, my name is Anupam Dagar. I'm a Full Stack Developer and a final year undergraduate student at IIIT Allahabad in India." />
      <link rel="canonical" href="http://anupamdagar.com" />

      <meta name="application-name" content="Anupam Dagar" />
      <meta name="theme-color" content="#48bfcd" />
      <meta name="apple-mobile-web-app-title" content="Anupam Dagar" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Helmet>

    <Particles className={styles.particles} params={particleOptions} />
    
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <About />
        <Links />
      </div>
    </div>
    <Footer />
  </>
)
