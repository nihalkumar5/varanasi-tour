import Link from "next/link";

export default function RidePage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/discover" style={{ textDecoration: "none", color: "#007AFF" }}>&larr; Back to Discover</Link>
      <h1 style={{ marginTop: "1rem" }}>🚕 Book Ride</h1>
      <p>Airport & city transport services coming soon.</p>
    </div>
  );
}
