import React from 'react';
import * as styles from '../styles/LearnMore.module.css';
import Layout from '../components/Layout';

const LearnMore = () => {
  const sections = [
    {
      title: 'Capture',
      content: `Simply connect the 360-camera to SiteView’s mobile app, strap over the helmet, and go! Effortlessly record 100% of the areas you see during site walk and easily combine it with routine site visits. SiteView will capture all the surroundings and accurately locate them in your drawings. No blind spots, no missed issues.`,
      image: '/images/capture.jpg',
    },
    {
      title: 'View',
      content: `360 photo captures are automatically organized by floor plan and date/time. See your site in 360° from anywhere, anytime. Walk the site by just using the mouse, as if you are there on-site. Never be dependent on the site team for useful information again. Photos are the first source of any records and SiteView makes them available instantly.`,
      image: '/images/view.jpg',
    },
    {
      title: 'Monitor',
      content: `Be assured that your project is fully documented and recorded for photographic proof of progress—whenever and wherever you need It. The whole project is in your pocket. Review historical work conditions, verify progress - side by side of different dates for every inch of your project site.`,
      image: '/images/monitor.jpg',
    },
    {
      title: 'Collaborate',
      content: `Run site meetings from your office with multiple stakeholders, without visiting site! Showcase the whole project during site meetings. Streamline technical discussions, comments, instructions, annotate and tag photos, keeping all teams in sync, improving transparency and projects moving forward.`,
      image: '/images/collaborate.jpg',
    },
  ];

  return (
    <Layout>
    <div className={styles.container}>
      <h1 className={styles.title}>How it works</h1>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <div className={styles.content}>
            <h2 className={styles.title}>{section.title}</h2>
            <p className={styles.description}>{section.content}</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={section.image} alt={section.title} className={styles.image} />
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default LearnMore;
