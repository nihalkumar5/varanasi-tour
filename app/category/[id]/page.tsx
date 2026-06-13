import Link from "next/link";
import styles from "./category.module.css";

// This is a dynamic route for categories, e.g., /category/boat
export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Format the category ID to a readable title
  const categoryTitle = id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // Dictionary of mock data for each category
  const categoryData: Record<string, any[]> = {
    boat: [
      { id: "b1", name: "Sunrise Ganga Cruise", rating: "4.9", reviews: 342, price: "₹400", features: ["Early Morning", "Tea Included", "Life Jackets"], image: "/kashi_1_1781255398165.png" },
      { id: "b2", name: "Kashi Heritage Boats", rating: "4.7", reviews: 189, price: "₹300", features: ["Experienced Oarsman", "Private"], image: "/kashi_2_1781255411346.png" },
      { id: "b3", name: "Evening Aarti Motorboat", rating: "4.8", reviews: 521, price: "₹800", features: ["Group Booking", "Motorized", "VIP View"], image: "/kashi_bg.png" },
    ],
    aarti: [
      { id: "a1", name: "VIP Aarti Seating", rating: "5.0", reviews: 890, price: "₹1500", features: ["Front Row", "Prasad", "Escorted"], image: "/service_vip.png" },
      { id: "a2", name: "Aarti View from Boat", rating: "4.9", reviews: 654, price: "₹500", features: ["On-Water View", "Tea & Snacks"], image: "/hero_aarti.png" },
      { id: "a3", name: "Guided Aarti Walk", rating: "4.6", reviews: 211, price: "₹300", features: ["History Briefing", "Group Walk"], image: "/service_guide.png" },
    ],
    guide: [
      { id: "g1", name: "Spiritual Kashi Walk", rating: "4.9", reviews: 432, price: "₹1200", features: ["4 Hours", "Temple Entry", "English/Hindi"], image: "/service_guide.png" },
      { id: "g2", name: "Hidden Alleys Tour", rating: "4.8", reviews: 298, price: "₹900", features: ["Local Food Tasting", "Hidden Temples"], image: "/service_food.png" },
      { id: "g3", name: "Sarnath Heritage Guide", rating: "4.7", reviews: 156, price: "₹1500", features: ["Half Day", "Transport Included"], image: "/kashi_3_1781255424564.png" },
    ],
    taxi: [
      { id: "t1", name: "Airport to City Transfer", rating: "4.8", reviews: 543, price: "₹850", features: ["AC Sedan", "Meet & Greet"], image: "/kashi_4_1781255437003.png" },
      { id: "t2", name: "Full Day City Tour", rating: "4.9", reviews: 321, price: "₹2200", features: ["8 Hours", "SUV Available", "Local Driver"], image: "/kashi_6_1781255449663.png" },
      { id: "t3", name: "Kashi Vishwanath Drop", rating: "4.6", reviews: 876, price: "₹300", features: ["Quick Drop", "E-Rickshaw Option"], image: "/kashi_7_1781255462360.png" },
    ],
    photo: [
      { id: "p1", name: "Ghat Portrait Session", rating: "5.0", reviews: 123, price: "₹2500", features: ["2 Hours", "50 Edited Photos", "Props"], image: "/kashi_8_1781255474628.png" },
      { id: "p2", name: "Pre-Wedding Cinematic", rating: "4.9", reviews: 89, price: "₹15000", features: ["Full Day", "Drone Included", "Video"], image: "/varanasighat.png" },
      { id: "p3", name: "Sunrise Candid Shoot", rating: "4.8", reviews: 234, price: "₹1800", features: ["1 Hour", "Raw + Edited"], image: "/bg_kashi_glow.png" },
    ],
    hotel: [
      { id: "h1", name: "Ganges Grand Resort", rating: "4.9", reviews: 1023, price: "₹4500", features: ["River View", "Breakfast Included", "Pool"], image: "/kashi_2_1781255411346.png" },
      { id: "h2", name: "Heritage Haveli Stay", rating: "4.8", reviews: 876, price: "₹3200", features: ["Authentic Decor", "Near Dashashwamedh"], image: "/kashi_3_1781255424564.png" },
      { id: "h3", name: "Backpacker's Hostel", rating: "4.6", reviews: 1543, price: "₹800", features: ["Bunk Beds", "Free Wi-Fi", "Community Kitchen"], image: "/kashi_7_1781255462360.png" },
    ],
  };

  // Default fallback if category not found
  const defaultProviders = [
    { id: "default1", name: `${categoryTitle} Experience 1`, rating: "4.5", reviews: 10, price: "₹500", features: ["Standard", "Popular"], image: "/kashi_1_1781255398165.png" },
    { id: "default2", name: `${categoryTitle} Experience 2`, rating: "4.2", reviews: 5, price: "₹300", features: ["Budget Friendly"], image: "/kashi_2_1781255411346.png" },
  ];

  const providers = categoryData[id] || defaultProviders;

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
          <p>Showing {providers.length} excellent providers</p>
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
                <img 
                  src={provider.image} 
                  alt={provider.name} 
                  className={styles.cardImg} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.ratingPill}>
                  ⭐ {provider.rating} <span className={styles.reviewsText}>({provider.reviews})</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h2>{provider.name}</h2>
                </div>
                
                <div className={styles.features}>
                  {provider.features.map((feature: string, index: number) => (
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
