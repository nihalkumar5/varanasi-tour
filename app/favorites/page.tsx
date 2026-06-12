"use client";

import styles from "../discover/page.module.css";
import FloatingFooter from "../components/FloatingFooter";

export default function Favorites() {
  return (
    <div className={styles.container} style={{ alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Favorites</h1>
      <p style={{ color: "#666", marginTop: "8px" }}>Your saved places and services will appear here.</p>
      <FloatingFooter />
    </div>
  );
}
