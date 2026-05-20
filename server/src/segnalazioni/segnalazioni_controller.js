const db = require('../db');
const queries = require('./segnalazioni_queries');

const getSegnalazioniList = async (req, res) => {
    try {
        const rows = await db.query(queries.getSegnalazioni);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero delle segnalazioni");
    }
};

const getOldSegnalazioni = async (req, res) => {
    const date = '2021-05-03';
    try {
        const rows = await db.query(queries.getSegnalazioniBeforeDate, [date]);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero delle segnalazioni vecchie");
    }
};

const addSegnalazione = async (req, res) => {
    const { oggetto, testo, utente_id } = req.body;
    try {
        await db.none(queries.addSegnalazione, [oggetto, testo, utente_id]);
        res.status(201).json({ message: "Segnalazione inviata con successo" });
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nell'invio della segnalazione");
    }
};

module.exports = {
    getSegnalazioniList,
    getOldSegnalazioni,
    addSegnalazione,
};
