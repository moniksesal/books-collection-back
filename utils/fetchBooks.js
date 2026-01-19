const axios = require('axios')

async function fetchBooks() {
    try {
        const url = 'https://api-books-ac3j.onrender.com/books'
        const response = await axios.get(url)
        return response.data

    } catch(error) {
        console.error(error)
        return {error: `Book not found ${error}`}
    }
}

module.exports = fetchBooks