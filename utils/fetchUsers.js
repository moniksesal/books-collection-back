const axios = require('axios')

async function fetchUsers() {
    try {
        const url = 'https://api-books-ac3j.onrender.com/users'
        const response = await axios.get(url)
        return response.data
    } catch(error) {
        console.error(error)
        return {error: `User not found ${error}`}
    }
}

module.exports = fetchUsers