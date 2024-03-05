const compraService = require("../services/compraService")

const getAll = async (req, res) => {
    const compras = await compraService.getAll();
    res.json(compras)
}

const createCompra = async (req, res) =>{
    const compras = await compraService.createCompra(req.body)
    res.json(compras)
}

module.exports = {
    getAll,
    createCompra
}