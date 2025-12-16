'use client';
import styles from './Expertise.module.css';
import { Pill, TrendingUp, Presentation, Users } from 'lucide-react'; // Changed icons for variety
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Pill size={32} />,
        title: "Promotion Pharmaceutique",
        desc: "Déploiement de forces de vente performantes et stratégies de visite médicale ciblées pour optimiser la prescription."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Accès au Marché & HTA",
        desc: "Accompagnement stratégique pour le pricing, le remboursement et les relations avec les autorités de tutelle."
    },
    {
        icon: <Presentation size={32} />,
        title: "Communication Scientifique",
        desc: "Création de contenus médicaux à forte valeur ajoutée et gestion des relations avec les leaders d'opinion (KOL)."
    },
    {
        icon: <Users size={32} />,
        title: "Formation & Accompagnement",
        desc: "Développement des compétences techniques et commerciales de vos équipes à travers des programmes sur mesure."
    }
];

export default function Expertise() {
    return (
        <section id="expertise" className="section" style={{ background: '#f8fafc' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className="heading-lg">Nos Domaines d'Expertise</h2>
                    <p className="subtitle">Nous intervenons sur toute la chaîne de valeur du médicament pour garantir votre succès.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>{item.icon}</div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.desc}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
