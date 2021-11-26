import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to="/" aria-label="My Portfólio">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact me</Link>
      </nav>
    </div>
  )
}

export default Header;
