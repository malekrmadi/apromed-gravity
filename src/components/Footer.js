import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>APROMED</h3>
                        <p>
                            Agence spécialisée en conseil et promotion pharmaceutique en Tunisie.
                            Partenaire de confiance des laboratoires et acteurs de santé.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Navigation</h4>
                        <div className={styles.links}>
                            <Link href="#about">Qui sommes-nous</Link>
                            <Link href="#expertise">Nos Expertises</Link>
                            <Link href="#methodology">Méthodologie</Link>
                            <Link href="#contact">Contact</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <div className={styles.links}>
                            <a href="mailto:contact@apromed.tn" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Mail size={16} /> contact@apromed.tn
                            </a>
                            <a href="tel:+21671000000" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Phone size={16} /> +216 71 000 000
                            </a>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#94a3b8' }}>
                                <MapPin size={16} /> Tunis, Tunisie
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} APROMED. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
