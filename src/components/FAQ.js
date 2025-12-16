'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Bénéficiez-vous d'un agrément pour l'exercice de vos activités ?",
        answer: "Oui, APROMED exerce conformément aux réglementations en vigueur en Tunisie. Nous veillons strictment au respect de l'éthique et des normes de la promotion médicale."
    },
    {
        question: "Comment garantissez-vous la qualité de vos délégués médicaux ?",
        answer: "Nos délégués suivent un processus de recrutement rigoureux et bénéficient d'une formation continue, tant sur le plan scientifique que sur les techniques de communication et de vente."
    },
    {
        question: "Proposez-vous des services de formation pour les équipes internes ?",
        answer: "Absolument. Nous concevons des programmes de formation sur mesure pour renforcer les compétences de vos équipes en techniques de vente, produits et environnement réglementaire."
    },
    {
        question: "Intervenez-vous sur toute la Tunisie ?",
        answer: "Oui, notre réseau couvre l'ensemble du territoire tunisien, assurant une présence optimale auprès des professionnels de santé dans toutes les régions."
    },
    {
        question: "Comment mesurez-vous l'impact de vos actions ?",
        answer: "Nous utilisons des outils de reporting avancés et définissons avec vou des KPIs précis (taux de couverture, fréquence de visite, retour sur investissement) pour suivre la performance en temps réel."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`section ${styles.section}`} id="faq">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className="heading-lg">Questions Fréquentes</h2>
                    <p className="subtitle">Retrouvez les réponses aux questions les plus courantes sur nos services.</p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}>
                            <button
                                className={styles.question}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.icon}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={styles.answerWrapper}
                                    >
                                        <div className={styles.answer}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
