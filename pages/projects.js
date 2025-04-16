import styles from "@/styles/Projects.module.css";
import { useState } from "react";

const projects = [
  {
    id: 15,
    name: "CephaloMastery",
    lang: ["PHP", "SQL", "Python", "JavaScript", "CSS"],
    desc: "Create a Moodle (LMS) plugin that allows dentistry to proffesors to upload pictures to create questions using an ML model",
    thumbnail: "thumbnails/CephaloMastery.png",
    route: "/projects/project_15",
    libraries: ["YOLO","numpy","Flask","tensorflow"],
    repo: "https://github.com/Salma-Eletreby/CephaloMastery.git",
    overview: "",
    features: "",
    challenges: [["challenge","solution"],["challenge","solution"]]
  },
  {
    id: 14,
    name: "LingoSnacks",
    lang: ["Kotlin", "Firebase"],
    desc: "Modify a provided template app to use Firebase and local storage to store data",
    thumbnail: "thumbnails/LingoSnacks.png",
  },
  {
    id: 13,
    name: "Learning Package Editor App",
    lang: ["Kotlin"],
    desc: "An andorid application that allows users to create flashcard sets for student users to learn new vocabulary",
    thumbnail: "thumbnails/Learning Package Editor App.png",
  },
  {
    id: 12,
    name: "Query Cost Estimator",
    lang: ["MySQL", "Java", "Swing"],
    desc: "Java Swing application connected to MySQL to estimate the cost of SELECT (primary/non-primary key, equality/range) and equi-JOIN queries by exploring execution plans based on stored table metadata and statistics.",
    thumbnail: "thumbnails/Query Cost Estimator.png",
  },
  {
    id: 11,
    name: "ConfPlus - 2",
    lang: ["React.js", "Prisma", "Next.js"],
    desc: "optimizes the Conference Management System with Prisma, multi-authentication, and conference statistics reporting.",
    thumbnail: "thumbnails/ConfPlus - 2.png",
  },
  {
    id: 10,
    name: "ConfPlus",
    lang: ["HTML", "CSS", "Node.js", "Next.js"],
    desc: "web-based Conference Management System for organizing academic events, allowing authors to submit papers, reviewers to evaluate them, and organizers to create and manage conference schedules.",
    thumbnail: "thumbnails/ConfPlus.png",
  },
  {
    id: 9,
    name: "DNS FTP Server",
    lang: ["Java"],
    desc: "Multithreaded Server/Client application implementing FTP and DNS services with authentication and logging.",
    thumbnail: "thumbnails/DNS FTP Server.png",
  },
  {
    id: 8,
    name: "System Admin",
    lang: ["C", "Linux"],
    desc: "A set of C and Linux (Ubunto) shell scripts to manage system activities, including user access validation, network and system monitoring, permission changes, software installation, and file searches, while logging and handling errors.",
    thumbnail: "thumbnails/System Admin.png",
  },
  {
    id: 7,
    name: "House Price Prediction",
    lang: ["Python"],
    desc: "This Python ML project predicts house prices based on various features such as dwelling type, zoning, lot size, neighborhood, and overall quality of the house.",
    thumbnail: "thumbnails/House Price Prediction.png",
  },
  {
    id: 6,
    name: "Central Doha Waste (CDW) System",
    lang: ["Java", "JavaFX"],
    desc: "Developed a comprehensive waste management system for Central Doha Waste (CDW) using Java and JavaFX, handling truck scheduling, driver management, customer information, and billing.",
    thumbnail: "thumbnails/Central Doha Waste CDW System.png",
  },
  {
    id: 5,
    name: "Efficient Array Operations in Assembly: Copy & Multiply",
    lang: ["Java", "SQL", "JavaFX"],
    desc: "An Assembly Language program that performs array operations, including copying elements and multiplying two arrays element-wise, optimizing performance at the low-level hardware level.",
    thumbnail: "thumbnails/Efficient Array Operations in Assembly Copy and Multiply.png",
  },
  {
    id: 4,
    name: "Dr Online",
    lang: ["Java", "SQL", "JavaFX"],
    desc: "A JavaFX-based application that integrates SQL database management to facilitate doctor-patient interactions. ",
    thumbnail: "thumbnails/Dr Online.png",
  },
  {
    id: 3,
    name: "Student Records System",
    lang: ["Java"],
    desc: "A Tree of Doubly Linked Lists-based student record system that optimizes insertion, deletion, and searching of students using their structured ID, with a user-friendly application for managing records efficiently.",
    thumbnail: "thumbnails/Student Records System.png",
  },
  {
    id: 2,
    name: "Car Rental System",
    lang: ["Java, JavaFX"],
    desc: "A Java-based user interface for the FCars rental system, enabling users to manage customers, cars, and rentals through intuitive windows for adding, updating, and deleting records.",
    thumbnail: "thumbnails/Car Rental System.png",
  },
  {
    id: 1,
    name: "Covid 19 Tracking System",
    lang: ["C++"],
    desc: "A C++-based COVID-19 tracking system that manages country records, allowing users to add, update, delete, search, and generate reports on confirmed cases and deaths.",
    thumbnail: "thumbnails/Covid 19 Tracking System.png",
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.lang.some((lang) =>
      lang.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className={styles.projectsBanner}>
        <div className={styles.projectsBannerText}>
          <h4>My Projects</h4>
          <h5>Innovative Solutions • Practical Impact</h5>
          <h6>Brief showcase of my projects</h6>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.filters}>
          <input
            className={styles.searchParam}
            placeholder="Search By Project Name or Programming Language"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.projects}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <div
                key={p.id}
                className={styles.project}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${encodeURI(p.thumbnail)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h4>{p.name}</h4>
                <button>Go</button>
              </div>
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>
      </div>
    </>
  );
}