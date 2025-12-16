'use client';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgDecoration} />
            <div className={styles.shape1} />
            <div className={styles.shape2} />

            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.tag}>Partenaire de confiance</span>
                    <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>
                        <span className="text-primary">APROMED</span> — Conseil & promotion pharmaceutique en Tunisie
                    </h1>
                    <p className="subtitle" style={{ margin: '0 0 2.5rem 0' }}>
                        Transformez vos défis en opportunités. Nous accompagnons les laboratoires et acteurs de santé avec des stratégies innovantes et une expertise scientifique rigoureuse.
                    </p>

                    <div className={styles.actions}>
                        <a href="#contact" className="btn btn-primary">
                            Prendre un rendez-vous
                        </a>
                        <a href="#expertise" className="btn btn-secondary">
                            Découvrir nos services <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
