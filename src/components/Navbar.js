'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.navbar}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            APROMED
          </Link>

          <nav className={styles.nav}>
            <Link href="#about" className={styles.link}>Qui sommes-nous</Link>
            <Link href="#expertise" className={styles.link}>Expertise</Link>
            <Link href="#methodology" className={styles.link}>Méthodologie</Link>
            <Link href="#why-us" className={styles.link}>Pourquoi nous</Link>
          </nav>

          <div className={styles.cta}>
            <Link href="#contact" className="btn btn-primary ctaDesktop" style={{display: 'inline-flex'}}>
              <span>Prendre RDV</span>
              <Calendar size={18} />
            </Link>
            <button className={styles.mobileBtn} onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', 
              top: '80px', 
              left: 0, 
              right: 0, 
              background: 'white', 
              padding: '2rem', 
              borderBottom: '1px solid var(--border)',
              zIndex: 49,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <Link href="#about" className={styles.link} onClick={toggleMenu}>Qui sommes-nous</Link>
            <Link href="#expertise" className={styles.link} onClick={toggleMenu}>Expertise</Link>
            <Link href="#methodology" className={styles.link} onClick={toggleMenu}>Méthodologie</Link>
            <Link href="#why-us" className={styles.link} onClick={toggleMenu}>Pourquoi nous</Link>
            <Link href="#contact" className="btn btn-primary" onClick={toggleMenu}>Prendre RDV</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
