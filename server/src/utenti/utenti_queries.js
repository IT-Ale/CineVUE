const getUtenti = "SELECT username, nome, email FROM utenti ORDER BY username ASC";
const loginUser = "SELECT * FROM utenti WHERE username = $1 AND pass = $2";

module.exports = {
    getUtenti,
    loginUser,
};