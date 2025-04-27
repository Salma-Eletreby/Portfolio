import styles from "@/styles/skills.module.css";

const skills = [
    {
        skill: "C++",
        exp: "0",
        proj: ["Covid-19 Tracking System"]
    },
    {
        skill: "Java",
        exp: "0",
        proj: ["Car Rental System", "Query Cost Estimator"]
    },
    {
        skill: "Assembly",
        exp: "0",
        proj: []
    },
    {
        skill: "SQL",
        exp: 3,
        proj: ["Query Cost Estimator", "ConfPlus"]
    },
    {
        skill: "HTML",
        exp: 4,
        proj: ["Digital Addiction Website", "ConfPlus"]
    },
    {
        skill: "CSS",
        exp: 4,
        proj: ["Digital Addiction Website", "ConfPlus"]
    },
    {
        skill: "JavaScript",
        exp: 5,
        proj: ["Digital Addiction Website", "ConfPlus", "Car Rental System"]
    },
    {
        skill: "Node.js",
        exp: 3,
        proj: ["Car Rental System", "ConfPlus"]
    },
    {
        skill: "Next.js",
        exp: 2,
        proj: ["Digital Addiction Website", "ConfPlus"]
    },
    {
        skill: "React.js",
        exp: 5,
        proj: ["Digital Addiction Website", "ConfPlus", "Car Rental System"]
    },
    {
        skill: "Prisma",
        exp: 1,
        proj: ["CRUD API"]
    },
    {
        skill: "Linux",
        exp: 2,
        proj: ["Car Rental System"]
    },
    {
        skill: "Ubuntu",
        exp: 2,
        proj: ["Car Rental System"]
    },
    {
        skill: "Microsoft Office",
        exp: 3,
        proj: []
    },
    {
        skill: "C",
        exp: 2,
        proj: ["Car Rental System"]
    },
    {
        skill: "Kotlin",
        exp: 1,
        proj: []
    },
    {
        skill: "Python",
        exp: 2,
        proj: ["AI/ML Plugin for Dentistry"]
    },
    {
        skill: "C#",
        exp: 1,
        proj: ["Central Doha Waste Management"]
    },
    {
        skill: ".NET",
        exp: 1,
        proj: ["Central Doha Waste Management"]
    },
    {
        skill: "Redis",
        exp: 1,
        proj: []
    },
    {
        skill: "MongoDB",
        exp: 3,
        proj: ["CRUD API", "ConfPlus"]
    },
    {
        skill: "Firebase",
        exp: 1,
        proj: []
    },
    {
        skill: "TypeScript",
        exp: 2,
        proj: ["Digital Addiction Website", "CRUD API"]
    },
    {
        skill: "Vue.js",
        exp: 1,
        proj: ["Car Rental System"]
    },
    {
        skill: "Tailwind",
        exp: 1,
        proj: []
    },
    {
        skill: "AWS Lambda",
        exp: 1,
        proj: ["CRUD API"]
    }
];


export default function Skill() {
  return (
    <div className={styles.skillsMain}>
      <h1>Skills</h1>
      <h4>Total Years of Experience: <span>1 YOE</span></h4>
      <div className={styles.skills}>

      </div>
    </div>
  );
}
