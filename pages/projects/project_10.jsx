import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>ConfPlus</h1>
      <div className={styles.keywords}>
        <p>#HTML</p>
        <p>#CSS</p>
        <p>#Next.js</p>
        <p>#Node.js</p>
        <p>#JavaScript</p>
      </div>
      <p className={styles.desc}>Web-based Conference Management System for academic events, with paper submission, review, and scheduling.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/ConfPlus-Web.git" target="_blank" rel="noopener noreferrer">
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
            <strong>Conference Management System (ConfPlus)</strong> is a Conference Management System designed to facilitate the organization and execution of academic conferences. It aims to cater to the requirements of various stakeholders involved in the conference, including organizers, authors, reviewers, and visitors.
          </p>
          <br />

          <h4>🔹 Features:</h4>
          <p>Submit Paper</p>
          <ol>
            <li>Authors enter paper details (title, abstract, authors' details), select a presenter, and upload a PDF.</li>
            <li>Uploads the paper PDF to the server.</li>
            <li>Assigns 2 reviewers randomly from the users listed in users.json.</li>
            <li>Saves paper details to papers.json.</li>
          </ol>
          <br />
          <p>Create/Update Conference Schedule</p>
          <ol>
            <li>User defines sessions with titles, locations, dates, and times in the schedule editor</li>
            <li>User assigns accepted papers and presenters to sessions based on evaluations and Saves the conference schedule to schedule.json.</li>
          </ol>
          <br />
          <p>View Confrence Schedule</p>
          <ol>
            <li>Allows visitors to view the conference schedule from schedule.json.</li>
            <li>Provides filtering by conference date to display specific sessions.</li>
          </ol>
          <br />
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_10/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Paper Submission (Author): Submit papers, authorship details, and PDFs</li>
            <li>Conference Schedule Management (Organizer): Create and manage sessions and presentations</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Designing a responsive and user-friendly UI for various roles (organizers, reviewers, authors)
              <br />
              <strong>Solution:</strong> Use a component-based approach in Next.js with styled-components or CSS modules for reusable UI elements. Implement role-based UI rendering to show different views based on user roles.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
