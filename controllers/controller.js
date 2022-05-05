
const cardapio = require('../models/cardapio')
const path = require('path')

const controller = {
    index: (req, res) => res.render('index', {cardapio: cardapio}),
    detalhe: (req, res) => res.sendFile(path.join(__dirname, '../views/detalheMenu.html')),
}

module.exports = controller