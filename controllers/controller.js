

const controller = {
    index: (req, res) => res.sendFile(path.join(__dirname, '../views/index.html')),
    detalhe: (req, res) => res.sendFile(path.join(__dirname, '../views/detalheMenu.html')),
}

module.exports = controller