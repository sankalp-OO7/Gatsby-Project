import React, { useEffect, useRef } from 'react';
import * as styles from '../../styles/FeatureCards.module.css';

const features = [
  {
    title: "NO BLINDSPOT",
    description:
      "Walk any floor and any room you want with just a couple of clicks. Since it’s securely stored in the cloud, you’ll be able to access your whole project from any device, anywhere you have an internet connection.",
    videoSrc: "/videos/features2.mp4", // Local video source
    posterSrc: "/videos/features2.mp4", // Local poster image
 
   },
  {
    title: "TIME TRAVEL",
    description:
      "Travel your site back in time. SiteView records the visuals from Day-1 and stores it for years even after completion of the project. Select the date of your walk, as if you are there on that day. This forms an important tool to avoid disputes and serve as evidence during litigations.",
    videoSrc: "/videos/features2.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy2.mp4", // Local poster image
 
   },
  {
    title: "COMPARE PROGRESS",
    description:"Compare views of any two dates on your screen. Compare progress between any two dates, make as-built drawings, nothing is hidden behind that plaster.",
    videoSrc: "/videos/siteviewGuy3.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy3.mp4", // Local poster image
 
   },
  {
    title: "DOCUMENTATION",
    description:"Take photos and screenshots during your virtual walk of any floor directly from the screen. Send the photo to your teams or save on your computer directly with a click. Never be without that important photo you need.",
    videoSrc: "/videos/siteviewGuy3.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy3.mp4", // Local poster image
 
  },
  {
    title: 'VIRTUAL SITE MEETS',
    description: 'SiteView.ai transports you to your construction site virtually. Share immersive 360° views with remote teams, pinpoint issues, and collaborate seamlessly in real-time, all within virtual meetings.',
    videoSrc: '/videos/features2.mp4',
    posterSrc: '/path/to/your/image5.jpg',
  },
];

const FeatureSection = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.9}
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={styles.featureSection}>
      <div className={styles.container}>
        <div className={styles.featuresSubtitle}>
          <h2 className={styles.gradientText}>
            Resolving Real-World Construction Monitoring Challenges with SiteView
          </h2>
          <p>
            See how SiteView directly addresses the critical needs and challenges faced by the construction industry.
          </p>
        </div>
        <div className={styles.mainPinGroup}>
          {features.map((feature, index) => (
            <div
              className={`${styles.trackFeature} ${index % 2 !== 0 ? styles.alter : ""}`}
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
            >
              <div className={styles.colLeft}>
                <div className={styles.tfImg}>
                  <video
                    width="600"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
