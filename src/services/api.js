const axios = require('axios')

module.exports = {
    getUser: async (user_name) => {
        const user = await axios.get(`http://localhost:3001/api/users/${user_name}`)

        return user.data
    },
    updateBalance: async (user_name, result) => {
        return await axios.put(`http://localhost:3001/api/users/${user_name}`, {
            balance: result
        })
    }
}