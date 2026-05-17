const getFilms = "SELECT * FROM film";
const getFilmById = "SELECT * FROM film WHERE id = $1";
// Nuova query per il controllo duplicati
const checkFilmExists = "SELECT * FROM film WHERE titolo = $1 AND regista = $2";
// Query di inserimento
const addFilm = "INSERT INTO film (id, titolo, regista, genere, descrizione, foto_locandina) VALUES ($1, $2, $3, $4, $5, $6)";

module.exports = {
    getFilms,
    getFilmById,
    checkFilmExists,
    addFilm,
};