import React, { useEffect, useState } from 'react';
import styles from '../styles/feutenawards.module.css';
import { faUser, faEnvelope, faKitchenSet, faBeerMugEmpty, faHeart, faChartLine, faWhiskeyGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feutenawards() {
    useEffect(() => {
        document.title = "Feutenawards - ['en-z!ne]"
    });

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // TODO: Make functionality to write answer to a database
    return(
        <div className={styles.feutenawardsContainer}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.h1}>De feutenawards</h1>
                <div className={styles.personalInfo}>
                    <label className={styles.label} htmlFor="name"><FontAwesomeIcon icon={faUser} /> Jouw naam*</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                        autoComplete="off"
                        autoFocus
                        required
                    />

                    <label className={styles.label} htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Jouw email</label>
                    <input 
                        className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={inputs.email || ""}
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </div>

                <h2 className={styles.h2}>Vul hieronder de namen van de genomineerden in.</h2>
                
                <div className={styles.feutenInputs}>
                    <label className={styles.label} htmlFor="kookfeut"><FontAwesomeIcon icon={faKitchenSet} /> De beste kookfeut</label>
                    <input 
                        className={styles.input}
                        type="text"
                        id="kookfeut"
                        name="kookfeut"
                        value={inputs.kookfeut || ""}
                        onChange={handleChange}
                    />

                    <label className={styles.label} htmlFor="tapfeut"><FontAwesomeIcon icon={faWhiskeyGlass} /> De beste tapfeut</label>
                    <input 
                        className={styles.input}
                        type="text"
                        id="tapfeut"
                        name="tapfeut"
                        value={inputs.tapfeut || ""}
                        onChange={handleChange}
                    />

                    <label className={styles.label} htmlFor="bierfeut"><FontAwesomeIcon icon={faBeerMugEmpty} /> De meest bier drinkende feut</label>
                    <input 
                        className={styles.input}
                        type="text"
                        id="bierfeut"
                        name="bierfeut"
                        value={inputs.bierfeut || ""}
                        onChange={handleChange}
                    />

                    <label className={styles.label} htmlFor="seksfeut"><FontAwesomeIcon icon={faHeart} /> De meest seksueel actieve feut</label>
                    <input 
                        className={styles.input}
                        type="text"
                        id="seksfeut"
                        name="seksfeut"
                        value={inputs.seksfeut || ""}
                        onChange={handleChange}
                        />

                    <label className={styles.label} htmlFor="actievefeut"><FontAwesomeIcon icon={faChartLine} /> De meest actieve feut overall</label>
                    <input 
                        className={styles.input}
                        type="text"
                        id="actievefeut"
                        name="actievefeut"
                        value={inputs.actievefeut || ""}
                        onChange={handleChange}
                        />
                </div>
                <button className={styles.submitButton}>Versturen</button>
            </form>
        </div>
    );
};

export default Feutenawards;