import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>Student Records System</h1>
      <div className={styles.keywords}>
        <p>#Java</p>
      </div>
      <p className={styles.desc}>Uses Tree of Doubly Linked Lists to efficiently manage student records.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/Tree-of-linked-lists.git" target="_blank" rel="noopener noreferrer">
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
          <p>This project implements a custom data structure - a Tree of Linked Lists - allowing users to perform basic operations such as insert, search, and delete through a Command Line Interface (CLI).</p>
          <br />
          <p>The data structure is designed as a tree where each node contains a linked list. This structure enables efficient data storage and retrieval for various applications. The CLI interface is to test the basic operations in a setting where student data is stored using this structure</p>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_3/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Tree of Linked Lists is the core data structure comprising nodes, each holding a linked list.</li>
            <li>Provides functionalities for insertion, searching, and deletion of element</li>
            <li>CLI Interface that allows users to interact with the data structure through a simple command-line interface. </li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Implementing a data structure where each tree node contains a linked list adds complexity—especially in maintaining hierarchical and sequential relationships.
              <br />
              <strong>Solution:</strong> Clearly define classes: TreeNode, LinkedListNode, and the manager class TreeOfLinkedLists
            </li>
            <li>
              <strong>Challenge:</strong> Ensuring smooth user input handling and error-free insert/search/delete functionality via CLI.
              <br />
              <strong>Solution:</strong> Create a robust input handler with validation and use try-catch blocks to prevent crashes on invalid inp
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
