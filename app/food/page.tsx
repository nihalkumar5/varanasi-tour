import Link from "next/link";

export default function FoodPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/discover" style={{ textDecoration: "none", color: "#007AFF" }}>&larr; Back to Discover</Link>
      <h1 style={{ marginTop: "1rem" }}>🍲 Local Food</h1>
      <p>Street food tours coming soon.</p>
    </div>
  );
}
