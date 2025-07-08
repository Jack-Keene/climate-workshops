import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Offer from "./components/offer/Offer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}
