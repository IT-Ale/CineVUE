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

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await db.oneOrNone(queries.loginUser, [username, password]);
        if (user) {
            res.status(200).json({ message: "Login effettuato", user: { username: user.username, nome: user.nome } });
        } else {
            res.status(401).json({ error: "Credenziali non valide" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Errore durante il login");
    }
};

module.exports = {
    getUtentiList,
    loginUser,
};