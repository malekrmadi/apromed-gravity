'use client';
import styles from './Methodology.module.css';
import { motion } from 'framer-motion';

const steps = [
    {
        num: "1",
        title: "Analyse",
        desc: "Audit approfondi de l'environnement, des produits et de la concurrence pour identifier les opportunités."
    },
    {
        num: "2",
        title: "Stratégie",
        desc: "Définition d'un plan d'action personnalisé aligné sur vos objectifs commerciaux et médicaux."
    },
    {
        num: "3",
        title: "Mise en œuvre",
        desc: "Déploiement opérationnel des actions : recrutement, formation, visites et communication."
    },
    {
        num: "4",
        title: "Suivi & Optimisation",
        desc: "Monitoring continu des KPIs et ajustements agiles pour garantir la performance."
    }
];

export default function Methodology() {
    return (
        <section id="methodology" className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className="heading-lg">Notre Méthodologie</h2>
                    <p className="subtitle">Un processus éprouvé pour garantir l'efficacité de vos actions promotionnelles.</p>
                </div>

                <div className={styles.steps}>
                    <div className={styles.connector} />
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <div className={styles.stepNumber}>{step.num}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
