"use client"
import styles from "./page.module.css";
// import ThermostatIcon from '@mui/icons-material/Thermostat';
// import Co2Icon from '@mui/icons-material/Co2';
// import GroupsIcon from '@mui/icons-material/Groups';
// import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Contact from ".././components/contact/Contact";
// import { scrollToSection } from "../utils"

export default function Services() {
    return (
        <section className={styles.section}>
            <h1>Add services info here</h1>


            <Contact />

        </section>
    );
}

// <div className={styles.card}>
//     <div className={styles.cardHeaders}>
//         <h1 className={styles.title}>CLIMATE 101: THE FOUNDATIONS</h1>
//         <p className={styles.subheader}>
//             We deliver accessible and scientifically grounded climate workshops that help your team feel informed, not intimidated.
//         </p>
//     </div>


//     <div className={styles.content}>
//         <div className={styles.topics}>
//             <div className={styles.topic}>
//                 <ThermostatIcon fontSize="large" />
//                 <h3>What climate change is and isn’t</h3>
//             </div>
//             <div className={styles.topic}>
//                 <Co2Icon fontSize="large" />
//                 <h3>Causes, impacts, and key terms (carbon footprints, net zero, etc.)</h3>
//             </div>
//             <div className={styles.topic}>
//                 <GroupsIcon fontSize="large" />
//                 <h3>Why it matters for your organisation, team, and sector</h3>
//             </div>
//             <div className={styles.topic}>
//                 <QuestionAnswerIcon fontSize="large" />
//                 <h3>Real-world examples, interactive Q&A, and myth-busting</h3>
//             </div>
//         </div>
//         <div className={styles.format}>
//             <ul>
//                 <li>Half-day (including breaks)</li>
//                 <li>In-person</li>
//                 <li>Designed for teams of all sizes</li>
//                 <li>Optional follow-up resources</li>
//             </ul>
//         </div>

//     </div>
//     <button
//         onClick={() => scrollToSection("contact")}
//         style={{
//             padding: "1rem 2rem",
//             marginTop: "1rem",
//             fontSize: "0.8rem",
//             fontWeight: 700,
//             backgroundColor: "#FFF",
//             color: "#000",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer",
//         }}>
//         CONTACT US
//     </button>

// </div>