import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Link href="/">
            <a>YourLogo</a>
          </Link>
        </div>

        <div className={styles.navLinks}>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
          <Link href="/projects">
            <a className={styles.navLink}>Projects</a>
          </Link>
          <Link href="/contact">
            <a className={styles.navLink}>Contact</a>
          </Link>
        </div>

        <div className={styles.navIcons}>
          <a 
            href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.socialIcon} size={20} />
          </a>
          <a 
            href="https://github.com/kpanesar88" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={styles.socialIcon} size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;