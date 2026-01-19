const express = require('express')
const route = express.Router()
const fetchUsers = require('../utils/fetchUsers')

route.get('/', async (req, res) => {
    const data = await fetchUsers()
    res.json(data)
})

module.exports = route