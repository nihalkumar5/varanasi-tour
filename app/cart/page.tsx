"use client";

import styles from "../discover/page.module.css";
import FloatingFooter from "../components/FloatingFooter";

export default function Cart() {
  return (
    <div className={styles.container} style={{ alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Your Bookings</h1>
      <p style={{ color: "#666", marginTop: "8px" }}>Items you've added to your cart will appear here.</p>
      <FloatingFooter />
    </div>
  );
}
