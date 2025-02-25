import React, { useEffect } from 'react';

const Redactie = () => {
    useEffect(() => {
        document.title = "Redactie - ['en-z!ne]"
    });

    return (
        <div className="redactie">
            <h1>Hét karakterloze Redactie der ['endzjin] S.V.E.I.A.</h1>
            <p>Lux et Libertas ofwel “Licht en Vrijheid”. O.a. motto van de universiteit van Yale en het NRC handelsblad. Wij delen met geen van beide een band, enkel de ideologie uit het liberalisme.</p>
        </div>
    );
};

export default Redactie;