import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>Covid 19 Tracking System</h1>
      <div className={styles.keywords}>
        <p>#C++</p>
      </div>
      <p className={styles.desc}>C++ COVID-19 tracker for managing and reporting country case data.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/COVID-19-tracking-System.git" target="_blank" rel="noopener noreferrer">
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
          <p>The Covid-19 Tracking System is a comprehensive application built in C++ that allows users to manage and track Covid-19 data for different countries. It provides functionality for adding, updating, deleting, and querying country records based on specific conditions such as total cases, new cases, and deaths.</p>
          <br />
          <p>The system uses text files (".txt") to store and manage Covid-19 information for each country, ensuring easy read/write operations.</p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(1)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_1/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>List Country Information with search and filter functionality</li>
            <li>Update and delete country with new cases and new deaths, with corresponding updates to total cases.</li>
            <li>Classify countries based on the number of new cases and deaths, the countries are classified into three categories (Green, Yellow, Red)</li>
            <li>Users can generate reports of countries classified by their total cases or death rates.</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> The console-based interface may not be intuitive for users, especially when handling multiple operations (adding, updating, deleting records).
              <br></br>
              <strong>Solution:</strong> Improve the user interface by providing clear prompts and error messages, and using formatting (like <code>iomanip</code>) to display data in an easy-to-read tabular format. Consider adding a menu system with options for each functionality.
            </li>
            <li>
              <strong>Challenge:</strong> Users might enter incorrect or invalid data (e.g., non-numeric values for total cases, invalid country codes) when interacting with the system.
              <br></br>
              <strong>Solution:</strong> Implement input validation and error handling for all user inputs. For example, check if the entered country code is numeric and valid, and ensure that new cases and deaths are non-negative integers.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
