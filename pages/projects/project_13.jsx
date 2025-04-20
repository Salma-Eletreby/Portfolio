import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>Learning Package Editor App</h1>
      <div className={styles.keywords}>
        <p>#Android - Kotlin</p>
      </div>
      <p className={styles.desc}>An Android application that allows users to create flashcard sets for student users to learn new vocabulary</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/LingoSnacks-1.git" target="_blank" rel="noopener noreferrer">
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
            <strong>LingoSnacks</strong> is a Kotlin-based Android app built to enhance language learning through interactive activities. It supports teachers with features for content creation, offline access, and educational mini-games.
          </p>
          <br />

          <h4>🔹 Learning Package Editor:</h4>
          <p>Teachers can build and manage customized learning content by:</p>
          <ol>
            <li>Adding vocabulary with multiple definitions and example sentences</li>
            <li>Attaching media (images/videos) from the device gallery or camera</li>
            <li>Saving content locally as JSON files for use in the student app</li>
          </ol>
          <p>Only the creator can modify or delete their packages.</p>
          <br />

          <h4>🔐 Authentication & Roles:</h4>
          <ul>
            <li>Users can register and log in using email/password</li>
            <li>Only teachers can create or manage content</li>
            <li>Login is optional for students unless submitting a rating</li>
          </ul>
          <br />

          <h4>🧠 Modular Architecture:</h4>
          <ul>
            <li>Entities and repositories are implemented in Kotlin and tested via console output</li>
            <li>Navigation is fully functional and user-friendly</li>
            <li>Clean UI structure designed with best practices</li>
          </ul>
          <p>
            This implementation is part of <strong>Phase 1</strong> of this project. Cloud database and media sync will be integrated in the next phase.
          </p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_13/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Learning Package Editor for Teachers</li>
            <li>Media Attachment Support (Images, Videos, Links)</li>
            <li>Local JSON-based Storage (Phase 1)</li>
            <li>User Authentication with Role-Based Access</li>
            <li>Downloadable Packages for Offline Learning</li>
            <li>Local SQLite Support via Room (Offline Mode)</li>
            <li>Clean UI with Intuitive Navigation</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong>Allowing only the creator to edit/delete their own learning packages
              <br />
              <strong>Solution:</strong>track `userId` per package and restrict editing functionality using conditional UI logic
            </li>
            <li>
              <strong>Challenge:</strong>Designing a flexible UI for adding multiple definitions, sentences, and media per word  
              <br />
              <strong>Solution:</strong>Use dynamic RecyclerViews or expandable layouts to add/edit/delete sub-items per word entry.
            </li>
            <li>
              <strong>Challenge:</strong>Keeping the JSON structure consistent when saving packages
              <br />
              <strong>Solution:</strong>Use data classes and serialization libraries like Gson or kotlinx.serialization to enforce structure and simplify parsing.
            </li>
            <li>
              <strong>Challenge:</strong>Navigating between multiple screens smoothly
              <br />
              <strong>Solution:</strong>Use the Android Navigation Component or Intent-based navigation with clear back-stack handling.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
