import React, { useEffect } from 'react';

const Feutenawards = () => {
    useEffect(() => {
        document.title = "Feutenawards - ['en-z!ne]"
    });

    return (
        <div className="homeText">
            <h1>Hét karakterloze FEUTENAWARDS der ['endzjin] S.V.E.I.A.</h1>
            <p>Lux et Libertas ofwel “Licht en Vrijheid”. O.a. motto van de universiteit van Yale en het NRC handelsblad. Wij delen met geen van beide een band, enkel de ideologie uit het liberalisme.</p>
        </div>
    );
};

export default Feutenawards;