// src/components/OurCoreTeam.js
import React from 'react';
import * as styles from '../styles/AboutUs2.module.css';

const teamMembers = [
  {
    name: 'Yasg Shah',
    title: 'CEO',
    photo: '/assets/ceo.jpeg',
    linkedIn: 'https://www.linkedin.com/in/yash-shah-85a06b279/?originalSubdomain=in',
  },
  {
    name: 'Baburao',
    title: 'CTO',
    photo: '/images/jane-smith.jpg',
    linkedIn: ' ',
  },
  // Add more team members here
];

const OurCoreTeam = () => {
  return (
    <section className={styles.coreTeamSection}>
      <h2 className={styles.heading}>Our Core Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img
              src={member.photo}
              alt={`sphoto`}
              className={styles.photo}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.title}>{member.title}</p>
            <a
              href={member.linkedIn}
              className={styles.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCoreTeam;
