'use client';
import styles from './WhyChooseUs.module.css';
import { ShieldCheck, Target, Lightbulb, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: <ShieldCheck size={32} />,
        title: "Expertise Reconnue",
        desc: "Une équipe multidisciplinaire maîtrisant parfaitement les enjeux médico-marketing et réglementaires."
    },
    {
        icon: <Target size={32} />,
        title: "Approche Ciblée",
        desc: "Des stratégies sur mesure adaptées aux spécificités de chaque aire thérapeutique et de chaque produit."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Innovation Continue",
        desc: "L'intégration des dernières technologies digitales et pédagogiques pour maximiser l'impact de vos campagnes."
    },
    {
        icon: <HeartHandshake size={32} />,
        title: "Partenariat Durable",
        desc: "Une relation de confiance basée sur l'éthique, la transparence et l'engagement de résultat."
    }
];

const partners = ["PharmaOne", "MedLife", "Sanitia", "BioCare", "HealthPlus"];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className={`section ${styles.section}`} style={{ padding: '5rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className="heading-lg">Pourquoi choisir APROMED ?</h2>
                    <p className="subtitle">L'excellence opérationnelle au service de votre croissance.</p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.icon}>{item.icon}</div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.text}>{item.text || item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
                    <h3 className={styles.trustTitle}>Ils nous font confiance</h3>

                    <div className={styles.carouselContainer}>
                        {/* Duplicate the array to create seamless loop effect */}
                        <motion.div
                            className={styles.carouselTrack}
                            animate={{ x: [0, -1000] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...partners, ...partners, ...partners, ...partners].map((logo, index) => (
                                <div key={index} className={styles.logoItem}>
                                    {logo}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
