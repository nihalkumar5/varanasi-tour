"use client";

import styles from "../discover/page.module.css";
import FloatingFooter from "../components/FloatingFooter";

export default function Categories() {
  return (
    <div className={styles.container} style={{ alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Categories</h1>
      <p style={{ color: "#666", marginTop: "8px" }}>Explore all services and places.</p>
      <FloatingFooter />
    </div>
  );
}
