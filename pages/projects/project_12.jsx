import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>Query Cost Estimator</h1>
      <div className={styles.keywords}>
        <p>#MySQL</p>
        <p>#Java</p>
        <p>#Swing</p>
      </div>
      <p className={styles.desc}>Java Swing application connected to MySQL to estimate query cost based on execution plans.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/Query-Cost-Estimator.git" target="_blank" rel="noopener noreferrer">
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
            <strong>Query Cost Estimator</strong> is an application designed to estimate the execution costs of SQL SELECT and JOIN queries. The app leverages metadata and statistics from a relational database schema to help determine the most efficient query execution plan.
          </p>
          <br />

          <h4>🔹 Metadata and Statistics:</h4>
          <p>The application gathers and stores metadata and statistics for two related tables in the database, including:</p>
          <ol>
            <li>Number of rows, index availability, and page size for each table</li>
            <li>Other essential statistics necessary for query optimization</li>
          </ol>
          <p>These statistics are used by the query cost estimator to evaluate various execution plans.</p>
          <br />

          <h4>🔹 Query Cost Estimation:</h4>
          <ul>
            <li>The estimator accepts SQL queries involving SELECT and JOIN operations.</li>
            <li>It supports SELECT operations on both primary and non-primary keys, with equality and range operators.</li>
            <li>It also supports equi-joins for JOIN operations.</li>
          </ul>
          <br />

          <h4>🔹 Query Execution Plans:</h4>
          <ul>
            <li>The estimator explores all possible query plans based on the input query and stored statistics.</li>
            <li>It generates a list of execution plans with estimated costs for each plan.</li>
            <li>The application also displays statistics for the tables involved in the query.</li>
          </ul>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_12/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Relational Database Integration with MySQL</li>
            <li>Metadata and Statistics Storage for Tables</li>
            <li>Cost Estimation for Various Query Execution Plans</li>
            <li>Graphical User Interface (GUI) with Java Swing</li>
            <li>Utility Functions for Viewing Metadata and Statistics</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Ensuring accurate query cost estimation based on metadata and statistics
              <br />
              <strong>Solution:</strong> Store and regularly update accurate statistics (e.g., row count, index usage, page size) in the database. Implement automated tests to verify the consistency of these statistics.
            </li>

            <li>
              <strong>Challenge:</strong> Handling complex SQL queries with multiple JOINs and conditions
              <br />
              <strong>Solution:</strong> Implement a query parsing and analysis module to break down complex queries into simpler subqueries. Handle each JOIN and WHERE condition systematically.
            </li>

            <li>
              <strong>Challenge:</strong> Query execution plan generation for multiple possible plans
              <br />
              <strong>Solution:</strong> Create a cost estimation algorithm that evaluates and compares multiple query execution plans, based on stored metadata, to determine the most efficient one.
            </li>

            <li>
              <strong>Challenge:</strong> Integrating MySQL with the Java backend for cost estimation
              <br />
              <strong>Solution:</strong> Use JDBC (Java Database Connectivity) to establish a connection between MySQL and the Java backend. Ensure proper handling of queries and results from the database for cost estimation.
            </li>
            <li>
              <strong>Challenge:</strong> Validating and handling invalid SQL queries
              <br />
              <strong>Solution:</strong> Implement SQL syntax validation and error handling in the backend. Provide meaningful error messages in the UI to help users understand and fix issues with their queries.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
