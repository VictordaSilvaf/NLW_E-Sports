import express, { request, response } from 'express';

const app = express()

app.get('/games', (request, response) => {
    return response.json([])
})

app.post('/ads', (request, response) => {
    return response.json([])
})

app.get('/games/:id/ads', (request, response) => {
    const gameId =request.params.id;
    
    return response.json([
        { id: 1, nome: 'game' },
        { id: 2, nome: 'game' },
        { id: 3, nome: 'game' },
    ])
})

app.listen(3333)