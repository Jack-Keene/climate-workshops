import styles from "./Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/"><h2 className={styles.title}>Climate Workshops</h2></Link>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                <li><a href="/services">Services</a></li>
            </ul>
        </nav>
    );
}
