import React, { useEffect, useState } from 'react';
import styles from '../styles/popupsection.module.css'; // CSS module for scoped styles

const PopupSection = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
      <div className={`${styles.popupContent}`}>
        <div className={`${styles.popupSection} ${isVisible ? styles.slideLeft : styles.hideLeft}`}>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
          <h2>About Me</h2>
          <div>
            <h3>Section 1</h3>
            <p>Your introduction goes here. Describe your background, experience, and what you're passionate about in software engineering.</p>
          </div>
        </div>
        <div className={`${styles.popupSection} ${isVisible ? styles.slideRight : styles.hideRight}`}>
          <h3>Section 2</h3>
          <p>Additional information can go here. Discuss your skills, projects, or anything else relevant.</p>
        </div>
      </div>
    </div>
  );
};

export default PopupSection;
