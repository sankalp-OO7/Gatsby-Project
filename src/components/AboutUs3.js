import React from 'react';
import * as styles from '../styles/AboutUs3.module.css';

const ValuesSection = () => {
  const values = [
    {
      title: "Innovation Mindset",
      description:
        "At SiteView, innovation is at the core of everything we do. We are dedicated to continually developing solutions that not only meet current industry needs but also anticipate future challenges.",
      icon: "💡", // SVG or emoji can be used as a placeholder
    },
    {
      title: "People First",
      description:
        "We believe that our strength lies in our people. SiteView is committed to fostering a supportive and dynamic work environment where every team member can thrive.",
      icon: "👥",
    },
    {
      title: "Collaborative Spirit",
      description:
        "Collaboration is pivotal to our success. We cultivate a culture where ideas are freely exchanged and teamwork is encouraged both within our organization and in partnerships with our clients.",
      icon: "🤝",
    },
    {
      title: "Excellence in Every Pixel",
      description:
        "SiteView is committed to excellence in all facets of our operations. We strive to exceed expectations at every touchpoint.",
      icon: "🌟",
    },
  ];

  return (
    <section className={styles.featureSection}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h2 className={`${styles.gradientText} ${styles.mb16}`}>Our Values</h2>
        </div>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{value.icon}</div>
              <h4 className={styles.title}>{value.title}</h4>
              <p className={styles.description}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
