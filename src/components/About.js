'use client';
import styles from './About.module.css';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className={styles.wrapper}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Notre Identité
                        </span>
                        <h2 className="heading-lg">Partenaire stratégique de l'industrie pharmaceutique</h2>
                        <p className="subtitle" style={{ margin: 0, fontSize: '1.25rem', color: 'var(--foreground)' }}>
                            APROMED — Agence de Promotion Médicale et Scientifique.
                        </p>
                        <p className="text-muted" style={{ fontSize: '1.05rem' }}>
                            Nous sommes une équipe d'experts dédiés à la valorisation des produits de santé. Notre mission est de créer un pont efficace entre l'innovation pharmaceutique et la pratique médicale quotidienne, à travers des stratégies de promotion éthiques et performantes.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <strong>+10</strong>
                                <span>Années d'Expérience</span>
                            </div>
                            <div className={styles.statItem}>
                                <strong>100%</strong>
                                <span>Engagement</span>
                            </div>
                            <div className={styles.statItem}>
                                <strong>Expert</strong>
                                <span>Réseau Médical</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: '150%',
                                height: '150%',
                                background: 'rotating-gradient(rgba(255,255,255,0.1), transparent)',
                                animation: 'spin 20s linear infinite'
                            }} />
                            <span style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.05em', zIndex: 1 }}>APROMED</span>
                            <span style={{ opacity: 0.8, letterSpacing: '0.2em', marginTop: '1rem', zIndex: 1 }}>TUNISIE</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
