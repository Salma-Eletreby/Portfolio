import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>Dr Online</h1>
      <div className={styles.keywords}>
        <p>#Java</p>
        <p>#SQL</p>
        <p>#Java FX</p>
      </div>
      <p className={styles.desc}>Doctor-patient interaction app built with JavaFX and SQL for data handling.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/Dr.-Online.git" target="_blank" rel="noopener noreferrer">
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
          <p>This project focuses on developing a comprehensive healthcare management system using SQL for data management and Java for the user interface. The system allows different user roles (Doctors, Patients, and Admin) with distinct access rights and functionalities.</p>
          <br />
          <h4>🔹 User-Specific Views</h4>
          <ul>
            <li><strong>Admin: </strong>Can view and manage login and personal information of Doctors and Patients.</li>
            <li><strong>Doctors & Patients: </strong>Access medication information.</li>
            <li><strong>Patients: </strong>View their topics and replies.</li>
            <li><strong>Doctors: </strong>View their topics and replies.</li>
          </ul>
          <br></br>
          <p>It involved creating tables and isnerting records into them in Oracle's SQL. Then by connecting this SQL connection to Java, I created a GUI using windows builder that allows users to view, update, delete, and insert records in the database without using queries depending on the role.</p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(13)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_4/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Login Screen that directs user to the correct main menu based on their role: Doctors, Patients, and Admin</li>
            <li>Admins can add, modify and delete patient and doctor profiles </li>
            <li>Patients and doctors can add, delete and modify topics (posts) and replies </li>
            <li>Patients can add, delete and update medication information </li>
            <li>Patients can rate doctors based on their experince with them </li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Connecting Java to Oracle SQL
              <br />
              <strong>Solution:</strong> Use the correct Oracle JDBC driver (ojdbc8.jar or ojdbc11.jar) and add it to your classpath.
            </li>
            <li>
              <strong>Challenge:</strong> Directly concatenating user inputs into SQL queries is risky and can lead to SQL injection.
              <br />
              <strong>Solution:</strong> Always use PreparedStatements instead of plain Statement.
            </li>
            <li>
              <strong>Challenge:</strong> Long-running database queries block the JavaFX UI thread, freezing the UI.
              <br />
              <strong>Solution:</strong> Run database operations in a background thread using Task or Service
            </li>
            <li>
              <strong>Challenge:</strong> Too many views/forms can be hard to manage and navigate using JavaFX.
              <br />
              <strong>Solution:</strong> Use a tabbed interface or dynamic loading of FXML files to switch between screens.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
