"use client";
import styles from "./Offer.module.css";
import { scrollToSection } from "../../utils"

export default function Offer() {
    return (
        <section className={styles.offer} id="offer">
            <div className={styles.offerOverlay}></div>
            <div className={styles.overlay}>
                <h1 className={styles.header}>
                    What we offer
                </h1>
                <h2 className={styles.text}>
                    We deliver accessible and scientifically grounded climate workshops that help your team feel informed, not intimidated.
                </h2>
                <div className={styles.buttonContainer}>

                    <button
                        onClick={() => scrollToSection("about")}

                        className={styles.buttonWhite}>
                        OUR TEAM
                    </button>
                    <button
                        className={styles.buttonTransparent}>
                        <a href="/services">OUR SERVICES</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

