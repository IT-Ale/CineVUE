const getUtenti = "SELECT username, nome, email FROM utenti ORDER BY username ASC";

module.exports = {
    getUtenti,
};