"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './explore.module.css';

export default function ExploreKashi() {
  const [selectedPin, setSelectedPin] = useState<string | null>(null);

  const locations = [
    { id: '1', type: 'ghat', name: 'Dashashwamedh Ghat', desc: 'Famous for the evening Ganga Aarti.', x: '45%', y: '50%', icon: '📍' },
    { id: '2', type: 'temple', name: 'Kashi Vishwanath', desc: 'One of the most famous Hindu temples.', x: '35%', y: '40%', icon: '🕉️' },
    { id: '3', type: 'food', name: 'Deena Chaat Bhandar', desc: 'Best local street food in town.', x: '60%', y: '30%', icon: '🍛' },
    { id: '4', type: 'ghat', name: 'Assi Ghat', desc: 'Popular for morning yoga and aarti.', x: '55%', y: '70%', icon: '📍' },
  ];

  const handlePinClick = (id: string) => {
    setSelectedPin(id);
  };

  const closeSheet = () => {
    setSelectedPin(null);
  };

  const selectedLocation = locations.find(loc => loc.id === selectedPin);

  return (
    <div className={styles.container}>
      {/* Full Screen Map Background */}
      <div className={styles.mapContainer}>
        <Image 
          src="/map_snippet.png" 
          alt="Map of Kashi" 
          fill 
          className={styles.mapImage}
          priority
        />
        <div className={styles.mapOverlay}></div>
        
        {/* Floating Pins */}
        {locations.map((loc) => (
          <div 
            key={loc.id}
            className={`${styles.pin} ${selectedPin === loc.id ? styles.pinActive : ''}`}
            style={{ top: loc.y, left: loc.x }}
            onClick={() => handlePinClick(loc.id)}
          >
            <div className={styles.pinIcon}>{loc.icon}</div>
            <div className={styles.pinPulse}></div>
          </div>
        ))}
      </div>

      {/* Floating Header */}
      <div className={styles.header}>
        <div className={styles.searchBar}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search Kashi..." className={styles.searchInput} />
        </div>
        <button className={styles.filterBtn}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </button>
      </div>

      {/* Bottom Sheet */}
      <div className={`${styles.bottomSheet} ${selectedPin ? styles.sheetExpanded : ''}`}>
        <div className={styles.dragHandle}></div>
        
        {!selectedPin ? (
          <div className={styles.sheetContent}>
            <h3>Popular Near You</h3>
            <p className={styles.sheetSub}>Swipe up to see more</p>
            <div className={styles.horizontalScroll}>
              {locations.map((loc) => (
                <div key={loc.id} className={styles.smallCard} onClick={() => handlePinClick(loc.id)}>
                  <div className={styles.smallCardIcon}>{loc.icon}</div>
                  <div className={styles.smallCardInfo}>
                    <h4>{loc.name}</h4>
                    <p>0.5 km</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.sheetDetails}>
            <button className={styles.closeBtn} onClick={closeSheet}>✕</button>
            <div className={styles.detailsHeader}>
              <div className={styles.detailsIcon}>{selectedLocation?.icon}</div>
              <div>
                <h3>{selectedLocation?.name}</h3>
                <p>Top Rated Destination</p>
              </div>
            </div>
            <p className={styles.detailsDesc}>{selectedLocation?.desc}</p>
            <button className={styles.actionBtn}>Navigate</button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <Link href="/discover" className={styles.navItem}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Home</span>
        </Link>
        <Link href="/explore" className={`${styles.navItem} ${styles.navActive}`}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span>Explore</span>
        </Link>
        <Link href="#" className={styles.navItem}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span>Analysis</span>
        </Link>
        <Link href="#" className={styles.navItem}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
