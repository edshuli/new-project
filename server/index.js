const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
const { response, request } = require('express');
require('dotenv').config();

console.log(process.env);

const app = express();
const port = process.env.port || 8080;

app.listen(port, function() {
    console.log('App is running on port: ' + port);
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', async(req, res) => {
    const beer_data = await fetch('https://sandbox-api.brewerydb.com/v2/beers/?key=659d5c6b8f3d2447f090119e48202fdb')
    const json = await beer_data.json();
    res.json(json);

})

/*const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('659d5c6b8f3d2447f090119e48202fdb')
brewdb.beers.random*/


/*app.get('/api/beers', async(req, res) => {
    /*const api_key = process.env.API_KEY;
    const api_url = `https://sandbox-api.brewerydb.com/v2/{beers}/?key=659d5c6b8f3d2447f090119e48202fdb`;
    const api_res = fetch(api_url);
    const api_data = await api_res.json();
    const BASE_URL = "https://sandbox-api.brewerydb.com/v2/{beers}/?key=659d5c6b8f3d2447f090119e48202fdb";
})

res.send('Hello World');
app.get('/beers', (req, res) => {
    const beers = request.params.beers;
    cosonle.log(beers);
    const brewdb_api = 'https://sandbox-api.brewerydb.com/v2/{beers}/?key=659d5c6b8f3d2447f090119e48202fdb';
    const fetch_res = fetch(brewdb_api);
    const json = fetch_res.json();
    res.json(json);
});*/

/*app.get('/api', (req, res) => {
    const api_key = process.env.API_KEY;
    const api_url = `https://sandbox-api.brewerydb.com/v2/api/${api_key}`;
    const api_res = fetch(api_url);
    console.log(api_res);
});*/