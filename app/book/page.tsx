"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import styles from "./page.module.css";

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Read from query params or fallback to defaults
  const title = searchParams.get('title') || 'Sunrise Boat Ride';
  const location = searchParams.get('location') || 'Assi Ghat, Varanasi';
  const priceStr = searchParams.get('price') || '499';
  const imageSrc = searchParams.get('image') || '/hero_aarti.png';
  const basePrice = parseInt(priceStr, 10);

  const [numPeople, setNumPeople] = useState(2);
  const totalAmount = numPeople * basePrice;

  const handleDecrement = () => {
    if (numPeople > 1) {
      setNumPeople(prev => prev - 1);
    }
  };

  const handleIncrement = () => {
    setNumPeople(prev => prev + 1);
  };

  const handleBooking = () => {
    alert(`Booking Confirmed for ${title}!\nAmount: ₹${totalAmount}\nPeople: ${numPeople}`);
    router.push("/cart");
  };

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
        <h1 className={styles.title}>Booking Details</h1>
      </div>

      {/* Service Card */}
      <div className={styles.serviceCard}>
        <div className={styles.serviceImgWrapper}>
          <Image src={imageSrc} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.serviceDetails}>
          <h2 className={styles.serviceTitle}>{title}</h2>
          <p className={styles.serviceLocation}>{location}</p>
          <p className={styles.servicePrice}>From ₹{basePrice} <span>/person</span></p>
        </div>
      </div>

      {/* Form Fields */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Date</label>
        <div className={styles.inputWrapper}>
          <input type="date" className={styles.input} defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Time</label>
        <div className={styles.inputWrapper}>
          <input type="time" className={styles.input} defaultValue="06:00" />
        </div>
      </div>

      <div className={styles.formGroup} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <label className={styles.label} style={{ marginBottom: 0 }}>Number of People</label>
        <div className={styles.counterWrapper}>
          <button className={styles.counterBtn} onClick={handleDecrement}>−</button>
          <div className={styles.counterValue}>{numPeople}</div>
          <button className={styles.counterBtn} onClick={handleIncrement}>+</button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Contact Name</label>
        <div className={styles.inputWrapper}>
          <input type="text" className={styles.input} placeholder="Enter your name" />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Phone Number</label>
        <div className={styles.inputWrapper}>
          <input type="text" className={styles.input} placeholder="Enter mobile number" />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Special Requests (Optional)</label>
        <div className={styles.inputWrapper}>
          <textarea className={styles.input} placeholder="Any special request..."></textarea>
        </div>
      </div>

      {/* Price Section */}
      <div className={styles.priceSection}>
        <h3 className={styles.label}>Price Details</h3>
        <div className={styles.priceRow}>
          <span>₹{basePrice} x {numPeople}</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className={styles.totalRow}>
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className={styles.bottomNav}>
        <button className={styles.proceedBtn} onClick={handleBooking}>
          Proceed to Book
        </button>
      </div>
    </div>
  );
}

export default function Book() {
  return (
    <Suspense fallback={<div style={{ padding: '24px', textAlign: 'center' }}>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}
