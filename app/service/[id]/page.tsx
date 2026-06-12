import Link from "next/link";
import Image from "next/image";
import styles from "./service.module.css";

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const service = {
    id: id,
    title: "Sunrise Boat Ride",
    providerName: "Ramesh Sahni",
    verified: true,
    rating: "4.9",
    reviews: "320+",
    languages: ["Hindi", "English", "Bhojpuri"],
    price: "₹299",
    image: "/hero_aarti.png", // Let's pretend it's a boat ride image
    description: "Experience the spiritual awakening of Kashi with a serene sunrise boat ride. Witness the magical Ghats coming alive as the sun rises over the Ganges."
  };

  return (
    <div className={styles.container}>
      {/* Full-bleed Hero Image / Photos */}
      <div className={styles.heroWrapper}>
        <Image src={service.image} alt={service.title} fill className={styles.heroImg} priority />
        
        {/* Top Floating Actions */}
        <div className={styles.topActions}>
          <Link href="/discover" className={styles.iconCircleBtn}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
          <button className={styles.iconCircleBtn}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        {/* Image Indicator */}
        <div className={styles.imageIndicator}>1/5 Photos</div>
      </div>

      {/* Overlapping Content Sheet */}
      <div className={styles.bottomSheet}>
        {/* Title & Price */}
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{service.title}</h1>
          <div className={styles.priceTag}>
            <span className={styles.priceAmount}>{service.price}</span>
            <span className={styles.priceUnit}>/person</span>
          </div>
        </div>

        {/* Ratings */}
        <div className={styles.ratingRow}>
          <span className={styles.star}>⭐</span>
          <span className={styles.ratingScore}>{service.rating}</span>
          <span className={styles.reviewCount}>({service.reviews} Reviews)</span>
        </div>

        <div className={styles.divider}></div>

        {/* Provider Profile Block */}
        <div className={styles.providerCard}>
          <div className={styles.providerInfo}>
            <div className={styles.providerAvatar}>
              <Image src="/service_guide.png" alt="Provider" fill className={styles.avatarImg} />
            </div>
            <div className={styles.providerDetails}>
              <div className={styles.providerNameRow}>
                <h3>{service.providerName}</h3>
                {service.verified && (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#10B981" stroke="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                )}
              </div>
              <p className={styles.providerType}>Verified Provider</p>
            </div>
          </div>

          {/* Languages */}
          <div className={styles.languagesWrapper}>
            {service.languages.map(lang => (
              <span key={lang} className={styles.languagePill}>{lang}</span>
            ))}
          </div>

          {/* Contact Actions (Call & WhatsApp) */}
          <div className={styles.contactActions}>
            <button className={`${styles.contactBtn} ${styles.callBtn}`}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call
            </button>
            <button className={`${styles.contactBtn} ${styles.waBtn}`}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp
            </button>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Description */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}>About this service</h3>
          <p className={styles.description}>{service.description}</p>
        </div>
        
        <div style={{height: "120px"}}></div> {/* Spacer for fixed button */}
      </div>

      {/* Floating Action Button */}
      <div className={styles.actionWrapper}>
        <div className={styles.actionPriceInfo}>
          <span className={styles.totalLabel}>Total Price</span>
          <span className={styles.totalAmount}>{service.price}</span>
        </div>
        <Link href={`/checkout/${service.id}`} className={styles.bookBtn}>
          Book Now
        </Link>
      </div>
    </div>
  );
}
