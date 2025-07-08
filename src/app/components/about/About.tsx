"use client"

import styles from "./About.module.css";
import Image from "next/image"
import { scrollToSection } from "../../utils"
export default function About() {
    return (
        <section className={styles.about} id="about">
            <h1 className={styles.header}>
                Our Team
            </h1>
            <div className={styles.aboutContainer}>
                <div className={styles.portraitsContainer}>
                    <div className={styles.portraitWrapper}>
                        <Image className={styles.portrait} src="/p1.png" alt="Portrait 1" />
                    </div>
                    <div className={styles.portraitWrapper}>
                        <Image className={styles.portrait} src="/p2.png" alt="Portrait 2" />
                    </div>
                </div>
                <div className={styles.description}>
                    {/* <h2>Our Team</h2> */}
                    <p>
                        We’re Rebecca and Maren - PhD researchers in Climate Science at the University of Oxford with professional backgrounds in consulting, corporate sustainability, and ESG reporting.
                    </p>
                    <br />
                    <p>
                        We combine academic insight with real-world experience to make climate science accessible, practical, and empowering for business teams.
                    </p>
                </div>
            </div>
            <button
                onClick={() => scrollToSection("contact")}
                style={{
                    marginTop: "4rem",
                    padding: "1rem 2rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    backgroundColor: "#FFF",
                    color: "#000",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}>
                {/* <a href="#contact">CONTACT US</a> */}
                CONTACT US
            </button>

        </section>
    )
}

