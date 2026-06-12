"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import FloatingFooter from "../components/FloatingFooter";

// Lucide/Material style SVGs
const Icons = {
  Boat: () => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><path d="M7 10h.01"/><path d="M12 10h.01"/><path d="M17 10h.01"/></svg>,
  Aarti: () => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  Guide: () => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Taxi: () => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>,
  Camera: () => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
  Hotel: () => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M10 13h.01"/><path d="M14 13h.01"/></svg>,
  MapPin: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  ChevronDown: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>,
  Menu: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
};

// Mock Database for different locations
const locationData: Record<string, any[]> = {
  "Dashashwamedh Ghat": [
    { id: 1, title: "Ganga Aarti", desc: "Experience the mesmerizing evening rituals at Dasaswamedh Ghat.", rating: "4.9", reviews: "1.2k+", price: "₹299", image: "/varanasighat.png" },
    { id: 2, title: "Sunrise Boat Ride", desc: "Witness the magical sunrise over the sacred Ganges river.", rating: "4.8", reviews: "850+", price: "₹499", image: "/hero_aarti.png" },
    { id: 3, title: "Temple Tour", desc: "Explore the ancient and holiest temples scattered across Kashi.", rating: "4.7", reviews: "500+", price: "₹699", image: "/varanasighat.png" },
  ],
  "Assi Ghat": [
    { id: 4, title: "Subah-e-Banaras", desc: "Start your day with morning yoga, classical music, and boat ride.", rating: "4.9", reviews: "2k+", price: "Free", image: "/hero_aarti.png" },
    { id: 5, title: "Evening Cafe Hop", desc: "Explore the vibrant cafe culture and street food near Assi.", rating: "4.6", reviews: "450+", price: "₹500", image: "/varanasighat.png" },
  ],
  "Sarnath": [
    { id: 6, title: "Dhamek Stupa Tour", desc: "Visit the exact spot where Buddha gave his first sermon.", rating: "4.8", reviews: "3k+", price: "₹150", image: "/varanasighat.png" },
    { id: 7, title: "Archaeological Museum", desc: "Explore ancient Buddhist relics and the famous Lion Capital.", rating: "4.7", reviews: "900+", price: "₹50", image: "/hero_aarti.png" },
  ],
  "Kashi Vishwanath": [
    { id: 8, title: "Temple VIP Darshan", desc: "Skip the lines for a peaceful darshan at the holy temple.", rating: "4.9", reviews: "5k+", price: "₹1100", image: "/varanasighat.png" },
    { id: 9, title: "Corridor Heritage Walk", desc: "Take a guided walk through the newly built Vishwanath Corridor.", rating: "4.8", reviews: "1.5k+", price: "₹200", image: "/hero_aarti.png" },
  ]
};

const locations = Object.keys(locationData);

export default function Discover() {
  const [currentLocation, setCurrentLocation] = useState("Dashashwamedh Ghat");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLocationWarning, setShowLocationWarning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Attempt to get user's location on mount
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          // Varanasi bounding box roughly 25.2 to 25.4 N, 82.9 to 83.1 E
          const isVaranasi = lat >= 25.1 && lat <= 25.5 && lng >= 82.8 && lng <= 83.2;
          
          if (!isVaranasi) {
            setShowLocationWarning(true);
          } else {
            setCurrentLocation("Assi Ghat");
          }
        },
        (error) => {
          console.log("Geolocation error or denied:", error);
        }
      );
    }
  }, []);

  const services = [
    { id: "boat", name: "Boat Ride", icon: <Icons.Boat />, link: "/boat" },
    { id: "aarti", name: "Ganga Aarti", icon: <Icons.Aarti />, link: "/aarti" },
    { id: "guide", name: "Local Guide", icon: <Icons.Guide />, link: "/guide" },
    { id: "taxi", name: "Taxi", icon: <Icons.Taxi />, link: "/taxi" },
    { id: "photo", name: "Photography", icon: <Icons.Camera />, link: "/photo" },
    { id: "hotel", name: "Hotel", icon: <Icons.Hotel />, link: "/hotel" },
  ];

  const popularToday = locationData[currentLocation] || locationData["Dashashwamedh Ghat"];

  return (
    <div className={styles.container}>
      {/* Top Header & Illustration Area */}
      <div className={styles.topIllustrationArea}>
        <Image 
          src="/varanasighat.png" 
          alt="Illustration" 
          fill 
          className={styles.illustrationImg} 
          priority
        />
        {/* Subtle dark gradient overlay for text readability */}
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.header}>
          <button className={styles.menuBtn}>
            <Icons.Menu />
          </button>

          <div className={styles.locationDropdownContainer}>
            <button 
              className={styles.locationSelectorBtn} 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className={styles.locationIconWrapper}>
                <Icons.MapPin />
              </div>
              <div className={styles.locationTextWrapper}>
                <span className={styles.locationValue}>
                  {currentLocation} <Icons.ChevronDown />
                </span>
              </div>
            </button>
            
            {isDropdownOpen && (
              <div className={styles.dropdownOverlay} onClick={() => setIsDropdownOpen(false)}>
                <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.dropdownHeader}>
                    <h3 className={styles.dropdownTitle}>Select Location</h3>
                    <button className={styles.closeBtn} onClick={() => setIsDropdownOpen(false)}>
                      ✕
                    </button>
                  </div>
                  {locations.map((loc) => (
                    <button 
                      key={loc}
                      className={`${styles.dropdownItem} ${currentLocation === loc ? styles.activeItem : ''}`}
                      onClick={() => {
                        setCurrentLocation(loc);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <Icons.MapPin /> {loc}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.avatar}>
            <Image src="/service_vip.png" alt="Profile" fill className={styles.avatarImg} />
          </div>
        </div>

        {/* Floating Search Bar (Inside Hero) */}
        <div className={styles.searchWrapper}>
          <div className={styles.searchBar}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder={`Find near ${currentLocation}`} 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.goBtn}>Go</button>
          </div>
          
          <button className={styles.filterBtnOutside}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </button>
        </div>

        {/* Chips inside image area */}
        <div className={styles.chipsWrapper}>
          {["Temples", "Ghats", "Food", "Boat Rides"].map((chip) => (
            <button 
              key={chip}
              className={`${styles.chip} ${searchQuery === chip ? styles.chipActive : ''}`}
              onClick={() => setSearchQuery(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        
        {/* Categories Header */}
        <div className={styles.locationHeader}>
          <h2 className={styles.locationTitle}>Categories</h2>
          <p className={styles.locationSubtitle}>Explore all services</p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Link href={service.link} key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                {service.icon}
              </div>
              <span className={styles.serviceName}>{service.name}</span>
            </Link>
          ))}
        </div>

        {/* Popular Today Section */}
        <div className={styles.popularSection}>
          <h3 className={styles.sectionTitle}>Popular Today</h3>
          <div className={styles.horizontalScroll}>
            {popularToday.map((item) => (
              <div key={item.id} className={styles.popularCard}>
                
                <div className={styles.cardImageWrapper}>
                  <Image src={item.image} alt={item.title} fill className={styles.popularCardImg} />
                </div>
                
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  
                  <div className={styles.cardStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>⭐ {item.rating}</span>
                      <span className={styles.statLabel}>Rating</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>{item.reviews}</span>
                      <span className={styles.statLabel}>Reviews</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>{item.price}</span>
                      <span className={styles.statLabel}>Price</span>
                    </div>
                  </div>

                  <Link 
                    href={{ 
                      pathname: '/book', 
                      query: { 
                        title: item.title, 
                        price: item.price.replace(/[^0-9]/g, ''), 
                        image: item.image,
                        location: 'Varanasi, India'
                      } 
                    }} 
                    className={styles.cardActionBtn}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Location Warning Modal */}
      {showLocationWarning && (
        <div className={styles.warningOverlay}>
          <div className={styles.warningModal}>
            <div className={styles.warningIcon}>
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3 className={styles.warningTitle}>Not in Varanasi?</h3>
            <p className={styles.warningDesc}>
              We detected that you are outside Varanasi. Features like nearby distances and auto-location may not work accurately. Do you still want to continue?
            </p>
            <div className={styles.warningActions}>
              <button className={styles.warningBtnPrimary} onClick={() => setShowLocationWarning(false)}>
                Yes, Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Footer Nav */}
      {!isDropdownOpen && <FloatingFooter />}
    </div>
  );
}
