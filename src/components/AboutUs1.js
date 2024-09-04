import React from 'react';
import * as styles from '../styles/AboutUs1.module.css';

const AboutUs = () => {
  return (
    <section className={styles.mainSection}>
      <div className={`container text-white `}>
        <div className={`row `}>
          <div className="col-lg-10 mx-auto text-center">
            <h2 className={`${styles.fs36} fw-bold ${styles.gradientTxt}`}>
              Pioneering Reality Intelligence: This Is Track3D
            </h2>
            <h3 className={styles.fs20}>
              Welcome to SiteView — your partner in transforming construction monitoring through advanced technology...
            </h3>
            <a href=" " className={`${styles.trackBtn} ${styles.trackBtnPrimary} ${styles.trackArrow}`}>
              Talk to Us
            </a>
          </div>

          <div className="container d-flex justify-content-center align-items-center">
            <div className={`row g-0 shadow-lg rounded overflow-hidden ${styles.watchVideoBlock}`}>
              <div className={`col-md-6 position-relative`}>
                <video
                  className={styles.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  
                >
                  <source
                    // src="https://track3d.ai/wp-content/themes/Track3D/assets/img/about/constructn-video.webm"
                    src='/assets/aboutus.mp4'
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.selectextShadowHost}></div>
              </div>
              <div className={`col-md-6 bg-white ${styles.watchVideoText}`}>
                <h3 className={`${styles.fs28} text-dark font-weight-bold`}>
                  Discover why leading professionals in the construction industry choose SiteView as their partner in innovation.
                </h3>
                <h3 className={`${styles.fs28} text-dark font-weight-bold`}>
                  Let's build the future together.
                </h3>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
