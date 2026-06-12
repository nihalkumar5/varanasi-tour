import Link from "next/link";

export default function PujaPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/discover" style={{ textDecoration: "none", color: "#007AFF" }}>&larr; Back to Discover</Link>
      <h1 style={{ marginTop: "1rem" }}>🛕 Puja & Pandit</h1>
      <p>Authentic rituals booking coming soon.</p>
    </div>
  );
}
