import Link from "next/link";
import Image from "next/image";
import styles from "./category.module.css";

// This is a dynamic route for categories, e.g., /category/boat-rides
export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Format the category ID to a readable title
  const categoryTitle = id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // We assign a placeholder image depending on the category ID to make it look premium
  let defaultImage = "/hero_aarti.png";
  if (id === "vip-darshan") defaultImage = "/service_vip.png";
  if (id === "tour-guides") defaultImage = "/service_guide.png";
  if (id === "food-tours") defaultImage = "/service_food.png";

  // Mock data showing different providers for this specific service category
  const providers = [
    { id: "p1", name: "Raju Boat Services", rating: "4.8", reviews: 124, price: "₹300", features: ["Life Jackets", "Guide Included"], image: defaultImage },
    { id: "p2", name: "Ganga Darshan Tours", rating: "4.9", reviews: 89, price: "₹350", features: ["Premium Boat", "Snacks"], image: defaultImage },
    { id: "p3", name: "Kashi Travels", rating: "4.5", reviews: 45, price: "₹250", features: ["Budget Friendly"], image: defaultImage },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/discover" className={styles.backBtn}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
        <h1>{categoryTitle}</h1>
        <div className={styles.headerSpacer}></div>
      </header>

      <main className={styles.main}>
        <div className={styles.infoBar}>
          <p>Showing {providers.length} providers</p>
          <button className={styles.filterBtn}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            Filter
          </button>
        </div>

        <div className={styles.providerList}>
          {providers.map((provider) => (
            <div key={provider.id} className={styles.providerCard}>
              <div className={styles.cardImgWrapper}>
                <Image src={provider.image} alt={provider.name} fill className={styles.cardImg} />
                <div className={styles.ratingPill}>
                  ⭐ {provider.rating} <span className={styles.reviewsText}>({provider.reviews})</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h2>{provider.name}</h2>
                </div>
                
                <div className={styles.features}>
                  {provider.features.map((feature, index) => (
                    <span key={index} className={styles.tag}>{feature}</span>
                  ))}
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.priceValue}>{provider.price}</span>
                  </div>
                  <Link href={`/service/${provider.id}`} className={styles.bookBtn}>Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
