"use client";

import { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./checkout.module.css";

export default function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  // We use `use` to unwrap the Promise in client components in Next.js 15
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const router = useRouter();

  // Mock Service Details
  const service = {
    title: "Premium Ganga Aarti Boat Ride",
    provider: "Raju Boat Services",
    basePrice: 300,
  };

  // State
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculations
  const platformFee = 50;
  const total = (service.basePrice * guests) + platformFee;

  const handlePayment = () => {
    if (!date || !time) {
      alert("Please select date and time.");
      return;
    }
    
    setIsProcessing(true);
    // Simulate payment delay
    setTimeout(() => {
      // Direct to bookings page after successful payment simulation
      router.push("/bookings");
    }, 1500);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link href={`/service/${id}`} className={styles.backBtn}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
        <h1>Confirm Booking</h1>
      </header>

      <main className={styles.main}>
        {/* Service Summary Card */}
        <div className={styles.card}>
          <div className={styles.summaryRow}>
            <div>
              <div className={styles.serviceTitle}>{service.title}</div>
              <div className={styles.providerName}>{service.provider}</div>
            </div>
            <div className={styles.basePrice}>₹{service.basePrice} <span style={{fontSize: "0.7rem", color: "#888", fontWeight: "normal"}}>/ person</span></div>
          </div>
        </div>

        {/* Date & Time Selection */}
        <div className={styles.card}>
          <h2>When are you going?</h2>
          <div className={styles.inputGroup} style={{marginBottom: "1rem"}}>
            <input 
              type="date" 
              className={styles.dateInput} 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className={styles.inputGroup}>
            <select className={styles.timeSelect} value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="" disabled>Select Time Slot</option>
              <option value="05:30 AM">05:30 AM (Sunrise)</option>
              <option value="06:00 PM">06:00 PM (Sunset Aarti)</option>
            </select>
          </div>
        </div>

        {/* Guest Count */}
        <div className={styles.card}>
          <h2>How many people?</h2>
          <div className={styles.guestRow}>
            <div className={styles.guestInfo}>
              <h3>Guests</h3>
              <p>Ages 3 or above</p>
            </div>
            <div className={styles.counter}>
              <button 
                className={styles.counterBtn} 
                onClick={() => setGuests(Math.max(1, guests - 1))}
                disabled={guests <= 1}
              >
                -
              </button>
              <span className={styles.count}>{guests}</span>
              <button 
                className={styles.counterBtn} 
                onClick={() => setGuests(guests + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className={styles.card}>
          <h2>Price Details</h2>
          <div className={styles.breakdownRow}>
            <span>₹{service.basePrice} x {guests} guests</span>
            <span>₹{service.basePrice * guests}</span>
          </div>
          <div className={styles.breakdownRow}>
            <span>Platform Fee (Taxes included)</span>
            <span>₹{platformFee}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total (INR)</span>
            <span>₹{total}</span>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className={styles.bottomBar}>
        <button 
          className={styles.payBtn} 
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing Securely..." : `Pay ₹${total}`}
        </button>
      </div>
    </div>
  );
}
