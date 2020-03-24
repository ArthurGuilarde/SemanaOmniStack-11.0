const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors())
// Permite a interpretação do body como JSON
app.use(express.json())
app.use(routes);

app.listen(3333);