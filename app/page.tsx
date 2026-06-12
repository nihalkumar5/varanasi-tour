import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      
      {/* Marquee Area */}
      <div className={styles.marqueeWrapper}>
        
        {/* Column 1: Scrolling Up */}
        <div className={styles.marqueeColumn}>
          <div className={styles.marqueeTrack}>
            {/* Original 4 items */}
            <div className={styles.marqueeItem}>
              <Image src="/kashi_1_1781255398165.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_2_1781255411346.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_4_1781255437003.png" alt="Kashi" fill className={styles.img} />
            </div>
            {/* Duplicated 4 items */}
            <div className={styles.marqueeItem}>
              <Image src="/kashi_1_1781255398165.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_2_1781255411346.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_4_1781255437003.png" alt="Kashi" fill className={styles.img} />
            </div>
          </div>
        </div>

        {/* Column 2: Scrolling Down */}
        <div className={styles.marqueeColumn}>
          <div className={styles.marqueeTrackReverse}>
            {/* Original 4 items */}
            <div className={styles.marqueeItem}>
              <Image src="/kashi_6_1781255449663.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_7_1781255462360.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_8_1781255474628.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h4l2-3 4 6 2-3h4"></path>
                </svg>
              </div>
            </div>
            {/* Duplicated 4 items */}
            <div className={styles.marqueeItem}>
              <Image src="/kashi_6_1781255449663.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_7_1781255462360.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_8_1781255474628.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h4l2-3 4 6 2-3h4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Text & Actions */}
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Discover the spiritual<br/>essence of Kashi!
        </h1>
        <p className={styles.subtitle}>
          Experience the most serene and profound journey<br/>through the ancient city of light, tailored just for you.
        </p>

        <Link href="/discover" className={styles.getStartedBtn}>
          Get started
        </Link>
      </div>

    </div>
  );
}
