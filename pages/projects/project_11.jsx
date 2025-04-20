import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>ConfPlus - 2</h1>
      <div className={styles.keywords}>
        <p>#React.js</p>
        <p>#Prisma</p>
        <p>#Next.js</p>
        <p>#Node.js</p>
        <p>#SQLite</p>
      </div>
      <p className={styles.desc}>Optimizes the Conference Management System with Prisma, multi-authentication, and conference stats reporting.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/ConfPlus-2.git" target="_blank" rel="noopener noreferrer">
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
            <strong>Conference Management System (ConfPlus)</strong> is a web application designed to manage academic conferences. It facilitates interaction between organizers, authors, and reviewers, handling tasks like paper submission, review, scheduling, and generating statistical reports. It is an improvement of a provided template
          </p>
          <br />

          <h4>🔹 Features:</h4>
          <p>The application provides various features for different user roles:</p>
          <ol>
            <li>Authors can submit papers with detailed information and author listings.</li>
            <li>Reviewers can review papers and provide feedback.</li>
            <li>Organizers can manage conference sessions, presentations, and schedules.</li>
          </ol>
          <p>ConfPlus also includes a statistics report that provides insights into the conference's paper submissions and schedule.</p>
          <br />

          <h4>🔹 Authentication:</h4>
          <ul>
            <li>Supports login via multiple authentication providers: GitHub, Google, Microsoft.</li>
            <li>Local authentication using a database is also available.</li>
          </ul>
          <br />

          <h4>🔹 Conference Statistics Report:</h4>
          <ul>
            <li>Displays the number of papers submitted, accepted, and rejected.</li>
            <li>Calculates the average number of authors per paper.</li>
            <li>Shows the number of conference sessions and the average number of presentations per session.</li>
          </ul>
          <br />
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_11/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Login with multiple authentication providers (GitHub, Google, Microsoft)</li>
            <li>Paper Submission (Author): Submit papers, authorship details, and PDFs</li>
            <li>Paper Review (Reviewer): Review assigned papers and provide feedback</li>
            <li>Conference Schedule Management (Organizer): Create and manage sessions and presentations</li>
            <li>Conference Statistics Report: View statistics on paper submissions, acceptance, and session scheduling</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Integrating authentication with multiple providers (GitHub, Google, Microsoft)
              <br />
              <strong>Solution:</strong> Use Next.js's authentication system, integrating libraries like `next-auth` to handle multiple OAuth providers. Ensure proper session management and security by storing tokens securely.
            </li>
            <li>
              <strong>Challenge:</strong> Designing a responsive and user-friendly UI for various roles (organizers, reviewers, authors)
              <br />
              <strong>Solution:</strong> Use a component-based approach in Next.js with styled-components or CSS modules for reusable UI elements. Implement role-based UI rendering to show different views based on user roles.
            </li>
            <li>
              <strong>Challenge:</strong> Generating conference statistics report dynamically based on real-time data
              <br />
              <strong>Solution:</strong> Use Prisma’s `aggregate` queries to fetch summary statistics directly from the database, reducing the need for heavy computation on the application side. Implement caching strategies to improve performance for frequently requested reports.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
