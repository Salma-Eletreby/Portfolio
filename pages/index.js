import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:salmashady144@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <>
      <div>
        <div className={styles.homeBanner}>
          <div className={styles.homeBannerText}>
            <h4>Salma El-Etreby</h4>
            <h5>Software Engineer</h5>
            <h6>Exploring the intersection of technology, design, and problem-solving.</h6>
          </div>
        </div>
        <div className={styles.about}>
          <h2>About Me</h2>
          <p>
            Hi, I’m Salma—a passionate software engineer with a strong foundation in both back end and front end development, as well as experience in machine learning and data analysis. I enjoy crafting clean, user-friendly web applications and solving complex technical challenges. My academic journey and personal projects have taught me the importance of adaptability, creativity, and continuous learning. Beyond coding, I’m deeply committed to creating impactful solutions that enhance user experiences and drive meaningful change. Welcome to my portfolio, where I showcase my journey, skills,
            and the projects that reflect my passion for technology!
          </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactForm}>
            <h2>Contact Me</h2>
            <p>Let’s connect and bring ideas to life—feel free to reach out!</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.in}>
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className={styles.in}>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Send Email</button>
            </form>
          </div>
          <div className={styles.contactGraphics}>
            <div className={styles.r1}></div>
            <img src="/contact.png"></img>
            <div className={styles.r2}></div>
          </div>
        </div>
      </div>
    </>
  );
}
