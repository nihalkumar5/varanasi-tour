"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import FloatingFooter from "../components/FloatingFooter";

export default function Chat() {
  const router = useRouter();

  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h1 className={styles.title}>Need Help?</h1>
        <p className={styles.subtitle}>We are here for you</p>
      </div>

      {/* Support Options */}
      <div className={styles.supportList}>
        
        {/* Call Us */}
        <a href="tel:+919876543210" className={styles.supportCard}>
          <div className={`${styles.iconWrapper} ${styles.callIconWrapper}`}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>Call Us</span>
            <span className={styles.cardDesc}>+91 98765 43210</span>
          </div>
        </a>

        {/* WhatsApp Us */}
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.supportCard}>
          <div className={`${styles.iconWrapper} ${styles.whatsappIconWrapper}`}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#25D366" stroke="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>WhatsApp Us</span>
            <span className={styles.cardDesc}>Chat with our team</span>
          </div>
        </a>

        {/* Location */}
        <Link href="/discover" className={styles.supportCard}>
          <div className={`${styles.iconWrapper} ${styles.locationIconWrapper}`}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C93B22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>Location</span>
            <span className={styles.cardDesc}>Assi Ghat, Varanasi</span>
          </div>
        </Link>

        {/* FAQs */}
        <Link href="/faqs" className={styles.supportCard}>
          <div className={`${styles.iconWrapper} ${styles.faqIconWrapper}`}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4C5784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              <rect x="9" y="9" width="6" height="6" rx="1"></rect>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>FAQs</span>
            <span className={styles.cardDesc}>Find quick answers</span>
          </div>
        </Link>
      </div>

      {/* Emergency Card */}
      <a href="tel:112" className={styles.emergencyCard}>
        <div className={styles.emergencyContent}>
          <span className={styles.emergencyTitle}>Emergency?</span>
          <span className={styles.emergencyDesc}>We're available 24x7</span>
        </div>
        <div className={styles.emergencyIconWrapper}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      </a>

      {/* Footer Nav */}
      <FloatingFooter />
    </div>
  );
}
