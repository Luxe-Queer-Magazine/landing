"use client";

import React, { useEffect, useState } from 'react';
import styles from './LavaLamp.module.css';

export function LavaLamp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add a class to the body for additional styling
    document.body.classList.add('splash-page');

    return () => {
      document.body.classList.remove('splash-page');
    };
  }, []);

  return (
    <div className={`${styles.lavaLamp} ${mounted ? styles.active : ''}`}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.blob4}></div>
      <div className={styles.blob5}></div>
    </div>
  );
}
