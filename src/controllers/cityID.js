const axios = require('axios')

const getCityId = async (req, res) => {
    let { cidade } = req.params

    const url = `https://brasilapi.com.br/api/cptec/v1/cidade/${cidade}`


    try {
        const response = await axios.get(url)
        const data = await response.data

        return res.json(data)

    } catch (error) {

        return res.json(error)
    }


}

module.exports = {
    getCityId
}