import Link from "next/link";
import styles from "./provider.module.css";

export default function ProviderDashboard() {
  const bookings = [
    { id: "B102", service: "Boat Ride (VIP)", customer: "Rahul S.", time: "Today, 5:30 PM", status: "Upcoming", earnings: "₹800" },
    { id: "B103", service: "E-Rickshaw", customer: "Priya M.", time: "Today, 2:00 PM", status: "Completed", earnings: "₹150" },
    { id: "B104", service: "Tour Guide", customer: "Amit K.", time: "Tomorrow, 9:00 AM", status: "Upcoming", earnings: "₹1200" },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <aside className={`${styles.sidebar} glass-panel`}>
        <div className={styles.logo}>
          <h2>Varanasi Provider</h2>
        </div>
        <nav className={styles.nav}>
          <Link href="/provider" className={`${styles.navLink} ${styles.active}`}>📊 Dashboard</Link>
          <Link href="#" className={styles.navLink}>📅 My Bookings</Link>
          <Link href="#" className={styles.navLink}>🛍️ Services</Link>
          <Link href="#" className={styles.navLink}>⚙️ Settings</Link>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Welcome back, Ravi! 👋</h1>
          <div className={styles.quickStats}>
            <div className={styles.statCard}>
              <h3>Today's Earnings</h3>
              <p className={styles.statValue}>₹2,150</p>
            </div>
            <div className={styles.statCard}>
              <h3>Pending Bookings</h3>
              <p className={styles.statValue}>5</p>
            </div>
          </div>
        </header>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Recent Bookings</h2>
            <button className={styles.primaryBtn}>View All</button>
          </div>
          
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Service</th>
                  <th>Customer</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Earnings</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.service}</td>
                    <td>{b.customer}</td>
                    <td>{b.time}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${b.status === 'Completed' ? styles.statusSuccess : styles.statusWarning}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className={styles.earnings}>{b.earnings}</td>
                    <td>
                      <button className={styles.actionBtn}>Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      
      {/* Mobile Bottom Nav (Visible only on small screens) */}
      <nav className={styles.mobileNav}>
        <Link href="/" className={styles.mobileNavItem}>
          <span>🏠</span>
          <span>App</span>
        </Link>
        <Link href="/provider" className={`${styles.mobileNavItem} ${styles.active}`}>
          <span>📊</span>
          <span>Dash</span>
        </Link>
      </nav>
    </div>
  );
}
