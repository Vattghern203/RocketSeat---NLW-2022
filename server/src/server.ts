import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio Shopee' },
        { id: 2, name: 'Anúncio Coach Safado' },
        { id: 3, name: 'Anúncio TikoTeko' },
        { id: 4, name: 'Anúncio ML' },
    ])
})

app.listen(3333)

