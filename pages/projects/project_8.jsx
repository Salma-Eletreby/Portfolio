import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>System Admin</h1>
      <div className={styles.keywords}>
        <p>#C</p>
        <p>#Linux</p>
      </div>
      <p className={styles.desc}>Set of C and Linux shell scripts for system tasks including user validation, network monitoring, and logging.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/System-Admin-Project.git" target="_blank" rel="noopener noreferrer">
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
          <p>These scripts are designed for monitoring system activity and performance on Ubuntu 22.04. The set of scripts logs user activity and captures crucial system information over time.</p>
          <br />
          <h4>🔹 Scripts Overview</h4>
          <ul>
            <li>
              <strong>Main.sh:</strong> Verifies user credentials and executes subroutines based on user privileges. Handles invalid login attempts, user access, and initiates system reboots on unauthorized access.
            </li>
            <li>
              <strong>Display.sh:</strong> Displays essential system information to the user.
            </li>
            <li>
              <strong>Network.sh:</strong> Collects network configuration, routing table, hostname, tests local DNS server, traces route to google.com, and pings google.com. Logs details in <code>network.log</code>.
            </li>
            <li>
              <strong>System.sh:</strong> Displays disk space, disk usage, memory, CPU model, and core count for the HOME directory. Saves output in <code>disk_info.log</code> and <code>mem_cpu_info.log</code>.
            </li>
            <li>
              <strong>Check.sh:</strong> Detects files with permission <code>777</code>, displays them, and changes permissions to <code>700</code>. Logs changes in <code>perm_change.log</code>.
            </li>
            <li>
              <strong>Install.sh:</strong> Installs MySQL, performs system updates, and displays reload messages. Logs errors to <code>Installation.log</code>.
            </li>
            <li>
              <strong>Search.sh:</strong> Searches for files larger than 1MB, logs the search date, and emails results to the system administrator. Details are saved in the <code>bigfile</code> log.
            </li>
          </ul>
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_8/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Credential verification and user privilege handling via Main.sh</li>
            <li>System information display through Display.sh</li>
            <li>Comprehensive network diagnostics and logging with Network.sh</li>
            <li>Disk, memory, and CPU stats collection in System.sh</li>
            <li>Automatic detection and permission fixing of 777 files using Check.sh</li>
            <li>MySQL installation and update handling with error logging via Install.sh</li>
            <li>Automated large file search and notification system using Search.sh</li>
            <li>Organized logging for system events and script operations</li>
            <li>Email alert functionality for system administrators</li>
            <li>Script modularity for ease of maintenance and scalability</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>
              <strong>Challenge:</strong> Handling unauthorized access attempts effectively
              <br />
              <strong>Solution:</strong> Log every attempt and implement a threshold limit that triggers a temporary lockout or system reboot.
            </li>
            <li>
              <strong>Challenge:</strong> Gathering reliable network diagnostics across different systems
              <br />
              <strong>Solution:</strong> Use standardized commands with fallbacks and log outputs for troubleshooting.
            </li>
            <li>
              <strong>Challenge:</strong> Identifying and correcting insecure file permissions
              <br />
              <strong>Solution:</strong> Automate scanning for `777` permissions and apply secure defaults like `700`, logging changes for audit.
            </li>
            <li>
              <strong>Challenge:</strong> Ensuring proper logging and storage management
              <br />
              <strong>Solution:</strong> Append logs with timestamps and implement log rotation or archiving to manage size.
            </li>
            <li>
              <strong>Challenge:</strong> Emailing search results from `Search.sh` when mail service isn't configured
              <br />
              <strong>Solution:</strong> Check for mail service availability, prompt for SMTP config if missing, and fall back to saving results locally.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
