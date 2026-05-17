// Query per ottenere la lista con i titoli dei film
const getRecensioni = `
    SELECT r.*, f.titolo 
    FROM recensioni r
    JOIN film f ON f.id = r.film_id
    ORDER BY r.id DESC
`;

// Controlli di integrità: verifichiamo se esistono ID e Username
const checkFilmExists = "SELECT * FROM film WHERE id = $1";
const checkUtenteExists = "SELECT * FROM utenti WHERE username = $1";

// Inserimento completo con tutti i campi
const addRecensione = `
    INSERT INTO recensioni (film_id, utente_id, voto, commento, data, num_like, num_dislike) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)
`;

module.exports = {
    getRecensioni,
    checkFilmExists,
    checkUtenteExists,
    addRecensione
};