const pgp = require('pg-promise')();
const db = pgp((
{
host: 'localhost',
port: 5432,
database: 'cineva',
user: 'alessio',
password: 'Alessio05'
}
));
module.exports = db;