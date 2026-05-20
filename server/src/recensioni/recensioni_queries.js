// Query per ottenere la lista con i titoli dei film (cronologico)
const getRecensioni = `
    SELECT r.*, f.titolo 
    FROM recensioni r
    JOIN film f ON f.id = r.film_id
    ORDER BY r.data ASC
`;

// Controlli di integrità: verifichiamo se esistono ID e Username
const checkFilmExists = "SELECT * FROM film WHERE id = $1";
const checkUtenteExists = "SELECT * FROM utenti WHERE username = $1";

// Inserimento completo con tutti i campi
const addRecensione = `
    INSERT INTO recensioni (film_id, utente_id, voto, commento, data, num_like, num_dislike) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)
`;

// Query complessa esercizio: film con voto 5 e almeno 2 like
const getTopRatedFilms = `
    SELECT DISTINCT f.titolo, f.genere
    FROM film f
    JOIN recensioni r ON f.id = r.film_id
    WHERE r.voto = 5 AND r.num_like >= 2
`;

module.exports = {
    getRecensioni,
    checkFilmExists,
    checkUtenteExists,
    addRecensione,
    getTopRatedFilms
};
