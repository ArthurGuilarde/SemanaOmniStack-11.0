const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.00',
        aluno: 'Arthur'
    });
});

app.listen(3333);