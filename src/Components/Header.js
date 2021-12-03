import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="My Portfolio"><Dogs/></Link>
        <div className={styles.links}>
          <Link to="/">HOME</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/contact">CONTACT ME</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;
