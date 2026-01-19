const express = require('express')
const route = express.Router()
const fetchBooks = require('../utils/fetchBooks')

route.get('/', async (req, res) => {
    const data = await fetchBooks()
    res.json(data)
})

module.exports = route