import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar} role="navigation">
            {/* LEFT SIDE OF THE NAVBAR */}
            <div className={styles.navbarLeft}>
                <a href="/" className={styles.navbarTitle}>['en-z!ne]</a>
            </div>
            {/* RIGHT SIDE OF THE NAVBAR */}
            <div className={styles.navbarRight}>
                <ul >
                    {/* <li className={styles.navbarLinks}>
                        <a className={styles.navbarHref} href="/home">Home</a>
                    </li> */}
                    <li className={styles.navbarLinks}>
                        <a className={styles.navbarHref} href="/feutenawards">Feutenawards</a>
                    </li>
                    <li className={styles.navbarLinks}>
                        <a className={styles.navbarHref} href="/enzines">['en-z!ne]'s</a>
                    </li>
                    <li className={styles.navbarLinks}>
                        <a className={styles.navbarHref} href="/stampboom">Stampboom</a>
                    </li>
                    <li className={styles.navbarLinks}>
                        <a className={styles.navbarRedactie} href="/redactie">Redactie</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;