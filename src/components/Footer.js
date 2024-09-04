import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>PRODUCT</h3>
          <ul>
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/visualtrack">VisualTrack</Link></li>
            <li><Link to="/progresstrack">ProgressTrack</Link></li>
            <li><Link to="/deviationtrack">DeviationTrack</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>SOLUTIONS</h3>
          <ul>
            <li><Link to="/for-owners">For Owners</Link></li>
            <li><Link to="/for-contractors">For General Contractors</Link></li>
            <li><Link to="/for-partners">For Trade Partners</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>COMPANY</h3>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/support-policy">Support and Availability Policy</Link></li>
            <li><Link to="/copyright-policy">Copyright Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} SiteView. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
