const axios = require('axios')

const obterPrevisao = async (req, res) => {

    const { cityID, days } = req.params
    let { dias } = req.query
    if (!dias) {
        dias = 1
    }
    if (dias <= 0 || dias > 6) {
        return res.status(400).json({ mensagem: `A quantidade de dias deve ser no mínimo 1 e no máximo 6 dias! ` })
    }
    const url = `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityID}/${dias}`

    try {
        const response = await axios.get(url)
        const data = response.data

        return res.json(data)
    } catch (error) {
        return res.json(error)
    }

}

module.exports = {
    obterPrevisao
}