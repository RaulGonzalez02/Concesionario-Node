const clienteService = require("../services/clienteService")

const getAll = async (req, res) => {
    const allClients = await clienteService.getAll()
    res.json(allClients)
}

const getOneByID = async (req, res) => {
    const oneclient = await clienteService.getOneByID(req.params.id)
    res.json(oneclient)
}

const post = async (req, res) => {
    const createClients = await clienteService.post(req.body)
    res.json(createClients)
}


module.exports = {
    getAll,
    getOneByID,
    post,
}