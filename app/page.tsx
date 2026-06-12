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
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><path d="M7 10h.01"/><path d="M12 10h.01"/><path d="M17 10h.01"/></svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_2_1781255411346.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
            </div>
            {/* Duplicated 4 items */}
            <div className={styles.marqueeItem}>
              <Image src="/kashi_1_1781255398165.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><path d="M7 10h.01"/><path d="M12 10h.01"/><path d="M17 10h.01"/></svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_2_1781255411346.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Scrolling Down */}
        <div className={styles.marqueeColumn}>
          <div className={styles.marqueeTrackReverse}>
            {/* Original 4 items */}
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_6_1781255449663.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h4l2-3 4 6 2-3h4"></path>
                </svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_8_1781255474628.png" alt="Kashi" fill className={styles.img} />
            </div>
            {/* Duplicated 4 items */}
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_6_1781255449663.png" alt="Kashi" fill className={styles.img} />
            </div>
            <div className={styles.marqueeItem}>
              <div className={styles.neonPill}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h4l2-3 4 6 2-3h4"></path>
                </svg>
              </div>
            </div>
            <div className={styles.marqueeItem}>
              <Image src="/kashi_8_1781255474628.png" alt="Kashi" fill className={styles.img} />
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
