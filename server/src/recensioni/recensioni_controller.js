const db = require('../db'); 
const queries = require('./recensioni_queries');

// Leggere tutte le recensioni
const getRecensioniList = async (req, res) => {
    try {
        const rows = await db.query(queries.getRecensioni);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero delle recensioni");
    }
};

// Aggiungere una recensione
const addRecensione = async (req, res) => {
    // Estraiamo i dati dal body (Postman)
    const { film_id, utente_id, voto, commento, data, num_like, num_dislike } = req.body;

    try {
        // 1. Verifichiamo se il film esiste
        const film = await db.oneOrNone(queries.checkFilmExists, [film_id]);
        if (!film) {
            return res.status(404).json({ error: "Film non trovato. Impossibile aggiungere recensione." });
        }

        // 2. Verifichiamo se l'utente (es: carlo57) esiste
        const utente = await db.oneOrNone(queries.checkUtenteExists, [utente_id]);
        if (!utente) {
            return res.status(404).json({ error: "Utente non trovato. Controlla lo username." });
        }

        // 3. Eseguiamo la INSERT
        await db.none(queries.addRecensione, [
            film_id, 
            utente_id, 
            voto, 
            commento, 
            data, 
            num_like, 
            num_dislike
        ]);

        res.status(201).json({ message: "Recensione aggiunta con successo!" });

    } catch (error) {
        console.error("Dettaglio errore:", error);
        res.status(500).send("Errore interno durante l'inserimento");
    }
};

const getTopRatedFilms = async (req, res) => {
    try {
        const rows = await db.query(queries.getTopRatedFilms);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore nel recupero dei film consigliati");
    }
};

module.exports = {
    getRecensioniList,
    addRecensione,
    getTopRatedFilms
};