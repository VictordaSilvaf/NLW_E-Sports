import express from 'express';

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, nome: 'game' },
        { id: 2, nome: 'game' },
        { id: 3, nome: 'game' },
    ])
})

app.listen(3333)