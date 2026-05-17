const db = require('../db');
const queries = require('./film_queries');

const getFilmList = async (req, res) => {
    try {
        // Questa riga recupera i dati
        const rows = await db.query(queries.getFilms);
        // Questa riga CHIUDE la richiesta inviando i dati a Postman
        res.status(200).json(rows); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero dei film");
    }
};

const addFilm = async (req, res) => {
    const { id, titolo, regista, genere, descrizione, foto_locandina } = req.body;

    try {
        // 1. Controllo duplicati per titolo e regista
        const existing = await db.oneOrNone(queries.checkFilmExists, [titolo, regista]);
        
        if (existing) {
            return res.status(409).json({ error: "Questo film (stesso titolo e regista) esiste già nel database" });
        }

        // 2. Inserimento nuovo film
        await db.none(queries.addFilm, [id, titolo, regista, genere, descrizione, foto_locandina]);
        res.status(201).json({ message: "Film aggiunto con successo!" });
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore durante l'aggiunta del film");
    }
};

module.exports = {
    getFilmList,
    addFilm,
};