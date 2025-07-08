"use client"
import styles from "./Contact.module.css";

import React from "react";

export default function Contact() {
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString(),
        });
        // Success and error handling ...
    };

    return (
        <section className={styles.contact} id="contact" >
            <h1> Drop us a line!</h1>
            <form className={styles.form} name="contact" onSubmit={handleFormSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <input autoComplete="off" type="text" id="name" name="name" required placeholder="Name*" />
                <input autoComplete="off" type="email" id="email" name="email" required placeholder="Email*" />
                <textarea autoComplete="off" id="message" name="message" required placeholder="Message" />
                <button className={styles.formSubmit} type="submit">Send</button>
            </form>
        </section>
    );
}
