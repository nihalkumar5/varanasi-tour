import Link from "next/link";

export default function BoatPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/discover" style={{ textDecoration: "none", color: "#007AFF" }}>&larr; Back to Discover</Link>
      <h1 style={{ marginTop: "1rem" }}>🛶 Book Boat</h1>
      <p>Sunrise & Aarti rides coming soon.</p>
    </div>
  );
}
