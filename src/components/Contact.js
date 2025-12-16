'use client';
import { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <section id="contact" className={`section ${styles.contactSection}`}>
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <motion.div
                        className={styles.formCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {isSuccess ? (
                            <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                                <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--accent-light)', borderRadius: '50%', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Message envoyé !</h3>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    Merci de nous avoir contactés. Notre équipe reviendra vers vous dans les plus brefs délais pour confirmer votre rendez-vous.
                                </p>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setIsSuccess(false)}
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className={styles.formTitle}>Prendre un rendez-vous</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label className={styles.label}>Nom complet</label>
                                            <input type="text" className={styles.input} placeholder="Votre nom" required disabled={isSubmitting} />
                                        </div>
                                        <div className={styles.field}>
                                            <label className={styles.label}>Email</label>
                                            <input type="email" className={styles.input} placeholder="votre@email.com" required disabled={isSubmitting} />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label className={styles.label}>Téléphone</label>
                                            <input type="tel" className={styles.input} placeholder="+216..." disabled={isSubmitting} />
                                        </div>
                                        <div className={styles.field}>
                                            <label className={styles.label}>Société / Laboratoire</label>
                                            <input type="text" className={styles.input} placeholder="Nom de votre structure" disabled={isSubmitting} />
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>Message</label>
                                        <textarea className={styles.textarea} placeholder="Dites-nous en plus sur vos besoins..." required disabled={isSubmitting}></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: '100%' }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" style={{ marginRight: '0.5rem' }} /> Envoi en cours...
                                            </>
                                        ) : 'Confirmer le rendez-vous'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
