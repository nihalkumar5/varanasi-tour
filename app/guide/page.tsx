import Link from "next/link";

export default function GuidePage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/discover" style={{ textDecoration: "none", color: "#007AFF" }}>&larr; Back to Discover</Link>
      <h1 style={{ marginTop: "1rem" }}>🚶 Local Guide</h1>
      <p>Verified local experts coming soon.</p>
    </div>
  );
}
