import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>House Price Prediction</h1>
      <div className={styles.keywords}>
        <p>#Python</p>
        <p>#Kaggle Data Set</p>
        <p>#numpy</p>
        <p>#sklearn</p>
        <p>#seaborn</p>
      </div>
      <p className={styles.desc}>Python ML project that predicts house prices based on features like lot size, zoning, and quality.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/House-Pricing-ML" target="_blank" rel="noopener noreferrer">
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
          <p>Motivation: House prices are on the rise and its hard to know if you are getting a true accurate price and if its good quality for a house that goes on sale. This project aims to create models using available dataset to predict the prices of houses or the quality</p>
          <br />
          <h4>🔹 Models Overview</h4>
          <ul>
            <li>
              <strong>Decesion Trees</strong> 
            </li>
            <li>
              <strong>Regression Models</strong>
            </li>
          </ul>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(13)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_7/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Different Models to predict different attributes</li>
            <li>Statistical Overview of the data</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> There is a lot of missing (NaaN) values
              <br />
              <strong>Solution:</strong> Use mean, mode and other statsitical values to replace the missing values
            </li>
            <li>
              <strong>Challenge:</strong> General data set so it is not targeted to a specific model
              <br />
              <strong>Solution:</strong> Try different models to further my understanding and see the differences
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
