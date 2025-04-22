import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>Efficient Array Operations in Assembly: Copy & Multiply</h1>
      <div className={styles.keywords}>
        <p>#Assembly</p>
      </div>
      <p className={styles.desc}>Assembly program to perform optimized array copy and multiply operations.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/Basic-Assembly-Project.git" target="_blank" rel="noopener noreferrer">
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
          <p>This project is for assembly programs implemented for the Mano Basic Computer. The programs focus on array manipulation, clipping values within a specific range, and performing multiplication operations using assembly language tailored for the Mano Basic Computer architecture.</p>
          <br />
          <h4>📋 Array Copy and Clipping Program</h4>
          <p>The first program in this repository aims to copy ArrayA to ArrayB in the RAM memory of the Mano Basic Computer. During the copying process, the program clips values between 100 and 200 to maintain updated values in ArrayB.</p>
          <br />
          <h4>🔹 Two Arrays Multiplication Program</h4>
          <p>Another program in this repository is built around a subroutine (function) designed to perform individual multiplications of two 4-bit numbers. The subroutine takes inputs A and B, adding A to itself B times.</p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_5/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Mano Basic Computer assembly program for copying and pasting with clipping</li>
            <li>A subroutine for 2 array multiplication</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> No Index Registers.
              <br />
              <strong>Solution:</strong> Manual pointer incrementing using temporary variables.
            </li>
            <li>
              <strong>Challenge:</strong> Data Clipping Logic Complexity.
              <br />
              <strong>Solution:</strong> Implemented clipping using arithmetic checks and branch instructions to select proper values.
            </li>
            <li>
              <strong>Challenge:</strong> No built-in multiplication
              <br />
              <strong>Solution:</strong> Used repeated addition inside a subroutine to simulate multiplication.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
