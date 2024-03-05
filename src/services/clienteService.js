const cliente = require("../database/models/clienteModel")

const getAll = async () => {
    const allClients = await cliente.findAll();
    return allClients
}

const getOneByID = async (id) => {
    const oneclient= await cliente.findByPk(id)
    return oneclient
}

const post = async (body) => {
    const createClients = await cliente.create(body)
    return createClients;
}

module.exports = {
    getAll,
    getOneByID,
    post
}