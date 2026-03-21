import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/popupsection.module.css'; // CSS module for scoped styles

const PopupSection = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10); // Delay to trigger animation after mounting
    } else {
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), 300); // Match CSS exit duration
    }
  }, [isOpen]);

  if (!isMounted) return null; // Don't render if not mounted

  return (
    <div className={`${styles.popupOverlay} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
      <div className={`${styles.popupContent} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <div className={`${styles.popupSection} ${isVisible ? styles.slideLeft : styles.hideLeft} ${theme === 'dark' ? styles.dark : styles.light}`}>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
          <h2>About Me</h2>
          <div>
            <h3>Experience & Goals</h3>
            <div className={styles.softSkillsSection}>
              <p>
                With 2 years of experience in software development, I specialize in <span className={styles.triangle}>Next.js</span>, <span className={styles.triangle}>Node.js</span>, and <span className={styles.triangle}>MongoDB</span>, with hands-on expertise in <span className={styles.circle}>Azure</span> cloud services. My journey includes leading the development of <span className={styles.square}>AI-powered project management tools</span>, automating workflows, and driving <span className={styles.circle}>operational efficiency</span>.
                <br/><br/>
                At Publicis Sapient, I designed <span className={styles.square}>microservices architectures</span>, improved <span className={styles.triangle}>system modularity</span>, and delivered scalable applications on Azure. My goal is to continue building impactful, scalable solutions that leverage <span className={styles.square}>AI</span> and <span className={styles.circle}>cloud technologies</span> to solve real-world problems and drive business value.
              </p>
              <div className={styles.softSkillsGrid}>
                {[
                  { name: 'Collaboration', image: 'https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/slack.svg' },
                  { name: 'Teams', image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Microsoft_Teams.png' },
                  { name: 'Communication', image: 'https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/zoom.svg' },
                  { name: 'Problem Solving', image: 'https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/stackoverflow.svg' },
                  { name: 'Adaptability', image: 'https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/trello.svg' },
                  { name: 'Leadership', image: 'https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/github.svg' },
                  { name: 'Time Management', image: 'https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/google_calendar.svg' },
                  { name: 'GitLab', image: 'https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/gitlab.svg' }
                ].map(skill => (
                  <div key={skill.name} className={styles.softSkillItem} title={skill.name}>
                    <img src={skill.image} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.popupSection} ${isVisible ? styles.slideRight : styles.hideRight} ${theme === 'dark' ? styles.dark : styles.light}`}>
          <h3>Skills & Technologies</h3>
          <div className={styles.techGrid}>
            {[
              { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
              { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
              { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com/' },
              { name: 'Azure', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', url: 'https://azure.microsoft.com/' },
              { name: 'Clerk', image: 'https://ph-files.imgix.net/297bc3d4-bd2e-4eaa-8fb6-a289cf61ea91.png?auto=format', url: 'https://clerk.com/' },
              { name: 'Cypress', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg', url: 'https://www.cypress.io/' },
              { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
              { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev/' },
              { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', url: 'https://spring.io/projects/spring-boot' },
              { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/' },
              { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://www.java.com/' },
              { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com/' },
              { name: 'Jest', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', url: 'https://jestjs.io/' },
              { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', url: 'https://firebase.google.com/' },
              { name: 'Bitbucket', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg', url: 'https://bitbucket.org/' },
              { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
            ].map(tech => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.techItem}
                title={tech.name}
              >
                <img src={tech.image} alt={tech.name} />
                <span>{tech.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSection;
