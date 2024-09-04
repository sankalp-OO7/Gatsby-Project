import React, { useEffect, useState } from 'react';
import * as styles from '../styles/ClientExperience.module.css';

const ClientExperience = () => {
  const [timeSavings, setTimeSavings] = useState(0);
  const [scheduleAdherence, setScheduleAdherence] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  const [costReduction, setCostReduction] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('client-experience');
      if (element && window.scrollY + window.innerHeight >= element.offsetTop) {
        animateNumbers();
      }
    };

    const animateNumbers = () => {
      animateValue(setTimeSavings, 0, 15, 1500);
      animateValue(setScheduleAdherence, 0, 12, 1500);
      animateValue(setTimeSaved, 0, 10, 1500); // Starts at 10% for the range 10-15%
      animateValue(setCostReduction, 0, 20, 1500);
    };

    const animateValue = (setter, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="client-experience" className={styles.container}>
      <h2 className={styles.heading}>
        What Have Our Clients Experienced with Us
      </h2>
      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <span className={styles.number}>{timeSavings}%</span>
          <p>Time Savings in Coordination</p>
          <p className={styles.description}>
            Streamline coordination with your project stakeholders, significantly cutting down time wasted and driving efficient execution.
          </p>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>{scheduleAdherence}%</span>
          <p>Improvement in Schedule Adherence</p>
          <p className={styles.description}>
            Stay on track with early delay alerts that help manage schedules proactively, improving overall project timeline adherence.
          </p>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>{timeSaved}-15%</span>
          <p>Time saved on non-optimal activities</p>
          <p className={styles.description}>
            Leverage production analytics, automated reports and time-stamped data for better coordination regarding tasks, payments - saving time spent on non-optimal activities, time that can be spent on more critical activities.
          </p>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>{costReduction}%</span>
          <p>Cost Reduction in Rework</p>
          <p className={styles.description}>
            Detect deviations early and take swift corrective action, drastically reducing rework expenses and protecting your project budget.
          </p>
        </div>
      </div>
      <button className={styles.demoButton}>Book Your Demo Now</button>
    </div>
  );
};

export default ClientExperience;
