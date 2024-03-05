const fabricanteservice = require("../services/fabricanteService")

const getById = async (req, res) => {
    const fabricante = await fabricanteservice.getById(req.params.id)
    res.json(fabricante)
}

const createFabricates = async (req, res) => {
    const newfabricate = await fabricanteservice.createFabricates(req.body)
    res.json(newfabricate)
}

module.exports = {
    getById,
    createFabricates
}