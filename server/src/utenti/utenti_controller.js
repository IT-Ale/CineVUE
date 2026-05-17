const db = require('../db'); 
const queries = require('./utenti_queries');

const getUtentiList = async (req, res) => {
    try {
        const rows = await db.query(queries.getUtenti);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero degli utenti");
    }
};

module.exports = {
    getUtentiList,
};