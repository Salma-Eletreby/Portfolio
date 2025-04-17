import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>LingoSnacks</h1>
      <div className={styles.keywords}>
        <p>#Android - Kotlin</p>
        <p>#Firebase Firestore</p>
        <p>#Firebase Authentication</p>
        <p>#Room (SQLite)</p>
      </div>
      <p className={styles.desc}>Modify a provided template app to use Firebase and local storage to store data</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/LingoSnacks-2.git" target="_blank" rel="noopener noreferrer">
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
          <p>
            <strong>LingoSnacks</strong> is a mobile app designed to support language learning for both teachers and students through interactive, game-like activities and an integrated content management system.
          </p>
          <br />

          <h4>🔹 Learning Package Editor:</h4>
          <p>Teachers can create custom learning packages by:</p>
          <ol>
            <li>Adding text-based activities and vocabulary</li>
            <li>Attaching media (images/videos) from the gallery or camera</li>
            <li>Saving and syncing content to Firestore and Cloud Storage</li>
          </ol>
          <p>All content is automatically updated and accessible across devices.</p>
          <br />

          <h4>🔹 Offline Learning Support:</h4>
          <p>Students can download packages for offline use, which includes:</p>
          <ol>
            <li>Storing content in local SQLite via Room</li>
            <li>Downloading associated media to the device</li>
            <li>Updating URLs to point to local resources</li>
          </ol>
          <p>The app syncs updates if newer versions exist online.</p>
          <br />

          <h4>🔐 Firebase Authentication:</h4>
          <ul>
            <li>Users can sign up and sign in using email and password</li>
            <li>User profiles are securely stored in Firestore</li>
          </ul>
          <br />

          <h4>🧠 Smart Syncing & Score Management:</h4>
          <ul>
            <li>Game scores are stored locally when offline</li>
            <li>Scores are pushed to Firestore automatically when the connection is restored</li>
          </ul>
          <p>Supports activities like Unscramble Sentences and Match Definitions.</p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(11)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_14/image_${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
          <li>Cloud Firestore Integration</li>
            <li>Firebase Cloud Storage</li>
            <li>Local SQLite Storage (Offline Mode)</li>
            <li>User Authentication</li>
            <li>Offline Score Sync</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong>Ensuring downloaded learning packages and media are consistent across both local and cloud databases, especially when the user is offline.
              <br />
              <strong>Solution:</strong> Implemented a version check to determine if the online package is newer than the local copy. If so, the local package is updated. Type converters were used to simplify storing complex JSON data in SQLite, and URLs were dynamically updated to point to local media paths after download.
            </li>
            <li>
              <strong>Challenge:</strong> Users needed to access learning content and continue activities like "Unscramble Sentences" even without an internet connection.
              <br />
              <strong>Solution:</strong> Used Room for local database storage and added logic to detect connectivity status. Game scores and package interactions are cached locally and pushed to Firestore once the internet is available again.
            </li>
            <li>
              <strong>Challenge:</strong> Synchronizing media uploads (images/videos) to Firebase Cloud Storage and ensuring proper cleanup when packages are deleted.
              <br />
              <strong>Solution:</strong>Integrated Firebase Storage SDK with logic to upload media during creation/editing and to delete associated media files upon package deletion. On download, media files are stored on the device and local URLs replace the cloud links in the SQLite database.
            </li>
            <li>
              <strong>Challenge:</strong> Fetching only the required data from Firestore while keeping bandwidth and read cost minimal.
              <br />
              <strong>Solution:</strong>Applied Firestore filtering directly in repository methods using where, limit, and orderBy clauses. Ensured all data fetching is lazy and paginated where needed to avoid performance issues.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
