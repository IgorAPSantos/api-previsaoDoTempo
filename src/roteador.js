const express = require('express')
const rotas = express()
const { getCityId } = require('./controllers/cityID')
const { obterPrevisao } = require('./controllers/previsao')

rotas.get('/cityID/:cidade', getCityId)
rotas.get('/previsao/:cityID', obterPrevisao)

module.exports = rotas