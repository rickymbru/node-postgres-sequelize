const express = require ('express');

const routes = require ('./routes');

const bodyParser = require('body-parser');

require('./database');
require('dotenv').config()

const app = express ();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use (routes);
app.use (express.json());

app.listen(process.env.PORT || 3333);
