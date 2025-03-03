import "@/styles/globals.css";
import styles from "@/styles/shared.module.css";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []); 

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Salma's Portfolio</title>
      </Head>
      <div className={styles.navBar}>
        <img className={styles.logo} src="/logo.png" alt="Logo" />
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleThemeToggle}>
            {theme === "light" ? (
              <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#F5EFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <g>
                <circle cx="12" cy="12" r="5" stroke="#1C132C" strokeWidth="1.5" />
                <path d="M12 2V4" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 20V22" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 12L2 12" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M22 12L20 12" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#1C132C" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}
          </svg>
        </div>
      </div>
      <Component {...pageProps} />
      <div className={styles.footer}>
        <img className={styles.logo} src="/logo.png" alt="Logo" />
        <div className={styles.navLinks}>
          <Link href="mailto:salmashady144@gmail.com">Email</Link>
          <Link href="https://github.com/Salma-Eletreby">GitHub</Link>
          <Link href="www.linkedin.com/in/salma-eletreby-271766282">LinkedIn</Link>
        </div>
      </div>
    </>
  );
}
