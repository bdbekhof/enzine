import React, { useEffect } from 'react';
import styles from '../styles/home.module.css';

const Home = () => {
    useEffect(() => {
        document.title = "Home - ['en-z!ne]"
    });

    return (
        <div className={styles.homeText}>
            <h1>Hét karakterloze studentenmagazine der ['endzjin] S.V.E.I.A.</h1>
            <p>Lux et Libertas ofwel “Licht en Vrijheid”. O.a. motto van de universiteit van Yale en het NRC handelsblad. Wij delen met geen van beide een band, enkel de ideologie uit het liberalisme.</p>
        </div>
    );
};

export default Home;