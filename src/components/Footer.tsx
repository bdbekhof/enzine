import React from 'react';
import styles from '../styles/footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faGlobe } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.mainFooterContent}>
                <p className={styles.mainFooterText}>Sinds het studiejaar 2001-2002 brengt de redactie van de [‘en-z!ne] jou viermaal per jaar een nieuwe editie van dit onafhankelijke magazine. 
                    Hierin kun jij de laatste roddels, lompe berichtgevingen en nieuwswaardige artikelen vinden. Alle edities, ooit uitgebracht, kun je hier (binnenkort) vinden. 
                    Mocht je enig commentaar (positief of negatief) hebben op de [‘en-z!ne], wil je de liefde verklaren aan de redactie of acht jij jezelf geschikt om zitting te nemen in de redactie; 
                    Neem dan contact met op met de hoofdredactie.</p>
            </div>
            <div className={styles.links}>
                <div className={styles.footerLinks}>
                    <a href="/" className={styles.footerAHref}><FontAwesomeIcon icon={faHouse}/> Home</a>
                    <a
                        href="https://engine.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerAHref}
                    >
                        <FontAwesomeIcon icon={faGlobe}/> ['endzjin] S.V.E.I.A.</a>
                </div>
                <div className={styles.footerSocialLinks}>
                    <a 
                        href="https://www.instagram.com/endzjin/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.footerAHref}
                    >
                        <FontAwesomeIcon icon={faInstagram}/> ['endzjin] S.V.E.I.A.</a>
                    <a 
                        href="https://www.facebook.com/endzjin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.footerAHref}
                    >
                        <FontAwesomeIcon icon={faFacebook}/> ['endzjin] S.V.E.I.A.</a>
                    <a 
                        href={`https://www.google.com/search?q=${encodeURIComponent("['endzjin] S.V.E.I.A.")}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.footerAHref}
                    >
                        <FontAwesomeIcon icon={faGoogle}/> Zoek ['endzjin] S.V.E.I.A. op Google
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;