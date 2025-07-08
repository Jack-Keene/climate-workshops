"use client"
import styles from "./Hero.module.css";
import { scrollToSection } from "../../utils"

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.overlay}>
                <h1 className={styles.header}>CLIMATE WORKSHOPS FOR BUSINESSES</h1>
                <h4 className={styles.text} >
                    Most professionals don’t feel confident talking about climate change - and that’s a problem.
                </h4>

                <button
                    onClick={() => scrollToSection("offer")}
                    className={styles.heroButton}>
                    LEARN MORE
                </button>
            </div>
        </section>
    );
}

