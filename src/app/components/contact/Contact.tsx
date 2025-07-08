import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contact} id="contact" >
            <h1> Drop us a line!</h1>
            <form className={styles.form} name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input autoComplete="off" type="text" id="name" name="name" required placeholder="Name*" />
                <input autoComplete="off" type="email" id="email" name="email" required placeholder="Email*" />
                <textarea autoComplete="off" id="message" name="message" required placeholder="Message" />
                <button className={styles.formSubmit} type="submit">Send</button>
            </form>
        </section>
    );
}
