'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowSplash(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <main className={styles.main}>
      {/* Lava Lamp Effect */}
      <div className={styles.lavaLamp}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Splash Screen */}
      {showSplash && (
        <div className={styles.splashScreen}>
          <div className={styles.splashLogo}>
            <Image 
              src="/blue-lips.jpg" 
              alt="Luxe Queer Logo" 
              width={200} 
              height={200} 
              className={styles.blueLips}
            />
          </div>
          <button onClick={handleEnter} className={styles.splashEnterButton}>
            Enter the World of Luxe Queer
          </button>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <div className={styles.mainContent}>
          <section className={styles.hero}>
            <div className={styles.heroLogo}>
              <Image 
                src="/blue-lips.jpg" 
                alt="Luxe Queer Logo" 
                width={150} 
                height={150}
                className={styles.blueLips}
              />
            </div>
            <h1>Luxury is About to Be Redefined.</h1>
            <p className={styles.subtitle}>
              Prepare for an unapologetic exploration of fashion, art, culture, and opulence—through a gloriously queer lens.
            </p>
            <p className={styles.comingSoon}>The Standard is Changing. Soon.</p>
          </section>

          <section className={styles.section}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Beyond the Velvet Rope</h2>
              <p className={styles.introText}>
                Luxe Queer is not merely a magazine; it's a declaration. We occupy the intersection where high fashion kisses queer liberation, where artistry challenges norms, and where technology serves identity. We are crafting a space for the discerning, the bold, the visionary—those who understand that true luxury is rooted in authentic expression. Forget what you thought you knew.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.lipstickSection}`}>
            <div className={styles.container}>
              <div className={styles.lipstickIcon} aria-hidden="true"></div>
              <h2 className={styles.lipstickTitle}>
                Introducing: The <span>Blue Lipstick</span> Edit
              </h2>
              <p className={styles.lipstickText}>
                Every revolution needs its signature. Ours is sharp, witty, and unapologetically bold. The Blue Lipstick Edit delivers potent takes on culture, style, and the state of luxury—served with the authority and flair only Luxe Queer can provide. Prepare for commentary that doesn't just observe, it commands.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.waitlistSection}`}>
            <div className={styles.container}>
              <h2 className={`${styles.sectionTitle} ${styles.gold}`}>Join the Vanguard</h2>
              <p className={styles.waitlistText}>
                Be among the first to experience Luxe Queer. Sign up for exclusive updates and early access.
              </p>
              <form className={styles.waitlistForm}>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Claim Your Invitation</button>
              </form>
            </div>
          </section>

          <footer className={styles.footer}>
            <div className={styles.footerLogo}>
              <Image 
                src="/blue-lips.jpg" 
                alt="Luxe Queer Logo" 
                width={100} 
                height={100}
                className={styles.blueLips}
              />
            </div>
            <div className={styles.footerLinks}>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Privacy</Link>
            </div>
            <p className={styles.copyright}>&copy; 2025 Luxe Queer Magazine. All rights reserved.</p>
          </footer>
        </div>
      )}
    </main>
  );
}
