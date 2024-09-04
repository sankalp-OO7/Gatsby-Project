import React from 'react';
import { useInView } from 'react-intersection-observer';
import * as styles from '../styles/FeatureSection.module.css';

const FeatureItem = ({ feature, isAlternate }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value as needed
  });

  return (
    <div
      ref={ref}
      className={`${styles.trackFeature} ${isAlternate ? styles.alter : ''} ${
        inView ? styles.animate : styles.hidden
      }`}
    >
      <div className={styles.colLeft}>
        <div className={styles.tfImg}>
          <video
            width="640"
            height="420"
            autoPlay
            loop
            muted
            preload="metadata"
            poster={feature.posterSrc}
            playsInline
          >
            <source src={feature.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className={styles.colRight}>
        <div className={styles.tfContent}>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
          <a
            href={feature.link}
            className={`${styles.trackBtn} ${styles.trackBtnPrimary} ${styles.trackArrow}`}
          >
            {feature.linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
