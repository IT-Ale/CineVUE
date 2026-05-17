const pgp = require('pg-promise')();
const db = pgp((
{
host: 'localhost',
port: 5432,
database: 'cinevue_db',
user: 'alessio',
password: 'Alessio05'
}
));
module.exports = db;