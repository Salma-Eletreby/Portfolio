import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>Central Doha Waste (CDW) System</h1>
      <div className={styles.keywords}>
        <p>#Java</p>
        <p>#Java FX</p>
      </div>
      <p className={styles.desc}>Waste management system using JavaFX for truck scheduling, billing, and customer data.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/CDW-Java-System.git" target="_blank" rel="noopener noreferrer">
          🔗 View Repository
        </a>
      </div>

      <div className={styles.tabsContainer}>
        <button className={styles.toggleBtn} onClick={toggle("overview")}>
          📘 Overview
        </button>
        <button className={styles.toggleBtn} onClick={toggle("gallery")}>
          🖼️ Gallery
        </button>
        <button className={styles.toggleBtn} onClick={toggle("features")}>
          ⚙️ Features
        </button>
        <button className={styles.toggleBtn} onClick={toggle("challenges")}>
          🧩 Challenges
        </button>
      </div>

      {openSection === "overview" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <p>Motivation: We were given a client and informed that the client wants a system for waste managment where the admin users create schedules, drivers can see their schedules and clients can register for the service. This project mainly focused on proper documentation and testing.</p>
          <br />
          <p>The system needed to have login screens that would redirect users to the correct main screen depending on their role</p>
          <p>The system needed to take in consideration security factors alongside functional requirements</p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_6/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Login System with locking feature</li>
            <li>Different Interfaces depending on user role: admin or driver</li>
            <li>Schedule Generation with load limits and automatic driver assigning</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Driver and trucks unavailability 
              <br />
              <strong>Solution:</strong> Implemented fallback system to assign casual drivers or alert admin when resources are unavailable.
            </li>
            <li>
              <strong>Challenge:</strong> Unclear Incomplete Schedule Behavior
              <br />
              <strong>Solution:</strong> Disabled "Save" unless all required values are set (driver, truck), and informed users of the issue.
            </li>
            <li>
              <strong>Challenge:</strong> Client communication 
              <br />
              <strong>Solution:</strong> Ensured client recieved detailed reports with all the communication and details and emt with clients to explaina dn agree on both techncial and non technical details
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
