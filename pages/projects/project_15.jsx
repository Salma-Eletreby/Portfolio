import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>CephaloMastery</h1>
      <div className={styles.keywords}>
        <p>#PHP</p>
        <p>#SQL</p>
        <p>#Python</p>
        <p>#JavaScript</p>
        <p>#CSS</p>
        <p>#YOLO</p>
        <p>#numpy</p>
        <p>#Flask</p>
        <p>#tensorflow</p>
      </div>
      <p className={styles.desc}>Create a Moodle (LMS) plugin that allows dentistry to proffesors to upload pictures to create questions using an ML model</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/CephaloMastery.git" target="_blank" rel="noopener noreferrer">
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
            <strong>CephaloMastery</strong> is an educational tool that leverages LMS (Moodle) to help dentistry professors teach and assess students on cephalometric analysis and diagnosis.
          </p>
            <br></br>
          <h4>🔹 Cephalometric Landmarks Plugin:</h4>
          <p>Professors can upload a cephalogram as a question and choose one of three annotation methods:</p>
          <ol>
            <li>Manually add the landmarks</li>
            <li>Upload a JSON file with the annotation data</li>
            <li>Use our integrated Machine Learning model (YOLOv8) to auto-generate annotations</li>
          </ol>
          <p>Questions are automatically added to the Moodle question bank. Students interactively place landmarks and receive feedback upon submission.</p>
          <br></br>
          <h4>🔹 Diagnosis Plugin:</h4>
          <p>Professors upload patient images and either:</p>
          <ol>
            <li>Manually provide answers/options</li>
            <li>Use a question template and our ML model (CNN-based) to generate answers</li>
          </ol>
          <p>Students answer using standard question formats. All questions are reusable from the Moodle bank.</p>
          <br></br>
          <h4>🧠 Machine Learning Integration:</h4>
          <ul>
            <li>
              <strong>LandmarksML:</strong> YOLOv8 detects and labels anatomical coordinates
            </li>
            <li>
              <strong>DiagnosisML:</strong> CNN-based model outputs diagnostic features
            </li>
          </ul>
          <p>Models are hosted via Flask APIs and connected to Moodle plugins.</p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_15/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Seamless integration with Moodle LMS</li>
            <li>Multiple annotation methods: manual, JSON upload, ML-assisted</li>
            <li>ML models hosted on Flask API with real-time inference</li>
            <li>Auto-generated, reusable Moodle question bank entries</li>
            <li>Interactive feedback loop for student submissions</li>
            <li>Modular plugin architecture for ease of maintenance</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Handling image annotation efficiently
              <br />
              <strong>Solution:</strong> Integrated YOLOv8 for automated detection via API
            </li>
            <li>
              <strong>Challenge:</strong> Creating a flexible question bank structure in Moodle
              <br />
              <strong>Solution:</strong> Programmatic question creation and tagging via Moodle API
            </li>
            <li>
              <strong>Challenge:</strong> Restricted Data set of images
              <br />
              <strong>Solution:</strong> Worked with dentistry proffessors to get as many images annoted as possible why respecting data privacy
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
