const express = require ('express')
const app = express()
const cors = require('cors')
const routesBooks = require('./routes/routesBooks')
const routesUser = require('./routes/routesUser')
const PORT = 3000

app.use(cors())

app.use('/users', routesUser)

app.use('/books', routesBooks)

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})