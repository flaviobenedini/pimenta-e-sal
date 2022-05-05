
const cardapio = require('../models/cardapio')
const path = require('path')

 
const controller = {
    index: (req, res) => res.render('index', {cardapio: cardapio}),
    detalhe: (req, res) => res.render('detalhe', {prato: cardapio.filter( item => item.id == req.params.id)[0]}),
}

module.exports = controller