import styles from "@/styles/project.module.css";
import { useState } from "react";

export default function Project15() {
  const [openSection, setOpenSection] = useState("overview");

  const toggle = (section) => () => setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className={styles.projectWrapper}>
      <h1 className={styles.title}>DNS FTP Server</h1>
      <div className={styles.keywords}>
        <p>#Java</p>
      </div>
      <p className={styles.desc}>Multithreaded Server/Client app implementing FTP and DNS with authentication and logging.</p>
      <div className={styles.links}>
        <a href="https://github.com/Salma-Eletreby/Network-Services.git" target="_blank" rel="noopener noreferrer">
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
          <p>This project involves the development of a multithreaded Server/Client application capable of serving various network services concurrently that includes DNS and FTP. It uses CLI.</p>
          <br />
          <h4>🔹 Server Specification</h4>
          <ol>
            <li>
              <strong>24/7 Availability and Handling Multiple Clients:</strong> The server must operate continuously and handle multiple clients simultaneously.
            </li>
            <li>
              <strong>Listening Thread: </strong> It should consistently listen for incoming connections on a separate thread.
            </li>
            <li>
              <strong>Predefined Services: </strong> The server has predefined services including DNS and FTP.
            </li>
          </ol>
          <br />
          <h4>🔹 FTP Service:</h4>
          <p>Client-Server Interaction:</p>
          <ol>
            <li>
              <strong>FTP Connection:</strong> Clients can connect to the server using FTP.
            </li>
            <li>
              <strong>Authentication:</strong> Server authenticates client credentials, allowing access only to authorized users.
            </li>
            <li>
              <strong>File Transfer:</strong> Clients can upload and download files to/from the server.
            </li>
            <li>
              <strong>Concurrent Handling:</strong> The server can handle multiple FTP requests from different clients concurrently using multithreading.
            </li>
            <li>
              <strong>Directory Navigation:</strong> Clients can navigate through the server's directory structure, listing directories and files.
            </li>
            <li>
              <strong>File Compression:</strong> Support for file compression and decompression on the server, reducing transfer time for large files.
            </li>
            <li>
              <strong>Quotas:</strong> Implement file size quotas for client uploads, rejecting uploads exceeding the quota limit..
            </li>
          </ol>
          <br />
          <h4>🔹 DNS Service:</h4>
          <ol>
            <li>
              <strong>Implementation: </strong> Clients can connect to the server using FTP.
            </li>
            <li>
              <strong>Functionality: </strong> Server authenticates client credentials, allowing access only to authorized users.
            </li>
            <li>
              <strong>Bidirectional Translation: </strong> Clients can upload and download files to/from the server.
            </li>
          </ol>
          <br />
          <h4>🔹 Logging:</h4>
          <p>The server logs essential information for connected clients with synchronized access, including:</p>
          <ul>
            <li>Client IP address</li>
            <li>Connection time and duration</li>
            <li>Type of service (DNS, FTP - feature)</li>
          </ul>
          <br />
        </div>
      )}

      {openSection === "gallery" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <div className={styles.grid}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.imageItem}>
                <img src={`/project_9/image-${i + 1}.png`} alt={`Screenshot ${i + 1}`} className={styles.imageHover} />
              </div>
            ))}
          </div>
        </div>
      )}

      {openSection === "features" && (
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <ul>
            <li>Multithreaded server capable of handling multiple client connections concurrently</li>
            <li>FTP service for secure file upload and download</li>
            <li>Client authentication before FTP file access</li>
            <li>Support for FTP directory navigation and listing</li>
            <li>File compression and decompression on the server</li>
            <li>Quota enforcement for upload size limits</li>
            <li>DNS service using UDP socket communication</li>
            <li>DNS translation between domain names and IP addresses (and vice versa)</li>
            <li>Support for concurrent DNS and FTP requests</li>
            <li>Thread-safe server logging of client IP, time, duration, and service type</li>
            <li>Console-based client-server interface using Java Socket and ServerSocket classes</li>
          </ul>
        </div>
      )}

      {openSection === "challenges" && (
       <div className={`${styles.section} ${styles.fadeIn}`}>
       <ul>
         <li>
           <strong>Challenge:</strong> Handling multiple client connections simultaneously without blocking.
           <br />
           <strong>Solution:</strong> Use multithreading to handle each client on a separate thread and maintain responsiveness.
         </li>
         <li>
           <strong>Challenge:</strong> Ensuring thread-safe access to shared server logs.
           <br />
           <strong>Solution:</strong> Implement synchronized logging methods or use thread-safe data structures like `ConcurrentHashMap` or `ReentrantLock`.
         </li>
         <li>
           <strong>Challenge:</strong> Avoiding deadlocks and race conditions in multithreaded code.
           <br />
           <strong>Solution:</strong> Design critical sections carefully and test for concurrency issues using stress tests.
         </li>
         <li>
           <strong>Challenge:</strong> Ensuring smooth file transfer without corruption or data loss.
           <br />
           <strong>Solution:</strong> Use buffered streams and proper encoding/decoding; verify file integrity with checksums.
         </li>
         <li>
           <strong>Challenge:</strong> Managing quota limits for FTP uploads effectively.
           <br />
           <strong>Solution:</strong> Check file size before upload, compare against quota, and reject with appropriate error message if exceeded.
         </li>
         <li>
           <strong>Challenge:</strong> Handling both TCP and UDP connections in the same server.
           <br />
           <strong>Solution:</strong> Run separate threads or classes for handling TCP (FTP) and UDP (DNS) to isolate protocol logic.
         </li>
       </ul>
     </div>
     
      )}
    </div>
  );
}
