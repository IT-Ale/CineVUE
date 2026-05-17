const express = require('express');
const filmRoutes = require('./src/film/film_routes');
const recensioniRoutes = require('./src/recensioni/recensioni_routes');
const utentiRoutes = require('./src/utenti/utenti_routes'); 

const app = express();
const port = 3000;

app.use(express.json());
app.use('/film', filmRoutes);
app.use('/recensioni', recensioniRoutes);
app.use('/utenti', utentiRoutes); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`app listening on port ${port}!`));