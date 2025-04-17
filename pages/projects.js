import styles from "@/styles/Projects.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const projects = [
  {
    id: 15,
    name: "CephaloMastery",
    lang: ["PHP", "SQL", "Python", "JavaScript", "CSS"],
    desc: "Create a Moodle (LMS) plugin that allows dentistry professors to upload pictures to create questions using an ML model",
    thumbnail: "thumbnails/CephaloMastery.png",
    route: "/projects/project_15",
  },
  {
    id: 14,
    name: "LingoSnacks",
    lang: ["Kotlin", "Firebase"],
    desc: "Modify a provided template app to use Firebase and local storage to store data",
    route: "/projects/project_14",
    thumbnail: "thumbnails/LingoSnacks.png",
  },
  {
    id: 13,
    name: "Learning Package Editor App",
    lang: ["Kotlin"],
    desc: "An Android application that allows users to create flashcard sets for student users to learn new vocabulary",
    route: "/projects/project_13",
    thumbnail: "thumbnails/Learning Package Editor App.png",
  },
  {
    id: 12,
    name: "Query Cost Estimator",
    lang: ["MySQL", "Java", "Swing"],
    desc: "Java Swing application connected to MySQL to estimate query cost based on execution plans.",
    route: "/projects/project_12",
    thumbnail: "thumbnails/Query Cost Estimator.png",
  },
  {
    id: 11,
    name: "ConfPlus - 2",
    lang: ["React.js", "Prisma", "Next.js"],
    desc: "Optimizes the Conference Management System with Prisma, multi-authentication, and conference stats reporting.",
    route: "/projects/project_11",
    thumbnail: "thumbnails/ConfPlus - 2.png",
  },
  {
    id: 10,
    name: "ConfPlus",
    lang: ["HTML", "CSS", "Node.js", "Next.js"],
    desc: "Web-based Conference Management System for academic events, with paper submission, review, and scheduling.",
    route: "/projects/project_10",
    thumbnail: "thumbnails/ConfPlus.png",
  },
  {
    id: 9,
    name: "DNS FTP Server",
    lang: ["Java"],
    desc: "Multithreaded Server/Client app implementing FTP and DNS with authentication and logging.",
    route: "/projects/project_9",
    thumbnail: "thumbnails/DNS FTP Server.png",
  },
  {
    id: 8,
    name: "System Admin",
    lang: ["C", "Linux"],
    desc: "Set of C and Linux shell scripts for system tasks including user validation, network monitoring, and logging.",
    route: "/projects/project_8",
    thumbnail: "thumbnails/System Admin.png",
  },
  {
    id: 7,
    name: "House Price Prediction",
    lang: ["Python"],
    desc: "Python ML project that predicts house prices based on features like lot size, zoning, and quality.",
    route: "/projects/project_7",
    thumbnail: "thumbnails/House Price Prediction.png",
  },
  {
    id: 6,
    name: "Central Doha Waste (CDW) System",
    lang: ["Java", "JavaFX"],
    desc: "Waste management system using JavaFX for truck scheduling, billing, and customer data.",
    route: "/projects/project_6",
    thumbnail: "thumbnails/Central Doha Waste CDW System.png",
  },
  {
    id: 5,
    name: "Efficient Array Operations in Assembly: Copy & Multiply",
    lang: ["Java", "SQL", "JavaFX"],
    desc: "Assembly program to perform optimized array copy and multiply operations.",
    route: "/projects/project_5",
    thumbnail: "thumbnails/Efficient Array Operations in Assembly Copy and Multiply.png",
  },
  {
    id: 4,
    name: "Dr Online",
    lang: ["Java", "SQL", "JavaFX"],
    desc: "Doctor-patient interaction app built with JavaFX and SQL for data handling.",
    route: "/projects/project_4",
    thumbnail: "thumbnails/Dr Online.png",
  },
  {
    id: 3,
    name: "Student Records System",
    lang: ["Java"],
    desc: "Uses Tree of Doubly Linked Lists to efficiently manage student records.",
    route: "/projects/project_3",
    thumbnail: "thumbnails/Student Records System.png",
  },
  {
    id: 2,
    name: "Car Rental System",
    lang: ["Java", "JavaFX"],
    desc: "JavaFX UI to manage customers, cars, and rental records.",
    route: "/projects/project_2",
    thumbnail: "thumbnails/Car Rental System.png",
  },
  {
    id: 1,
    name: "Covid 19 Tracking System",
    lang: ["C++"],
    desc: "C++ COVID-19 tracker for managing and reporting country case data.",
    route: "/projects/project_1",
    thumbnail: "thumbnails/Covid 19 Tracking System.png",
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

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
                <button onClick={() => router.push(p.route)}>Go</button>
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
