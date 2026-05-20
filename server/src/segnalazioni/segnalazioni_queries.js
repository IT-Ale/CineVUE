const getSegnalazioni = "SELECT * FROM segnalazioni ORDER BY data_invio DESC";
const getSegnalazioniBeforeDate = "SELECT * FROM segnalazioni WHERE data_invio < $1";
const addSegnalazione = "INSERT INTO segnalazioni (oggetto, testo, utente_id) VALUES ($1, $2, $3)";

module.exports = {
    getSegnalazioni,
    getSegnalazioniBeforeDate,
    addSegnalazione,
};
