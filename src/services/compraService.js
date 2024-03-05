const compra = require("../database/models/comprasModel")
const cliente = require("../database/models/clienteModel")
const vehiculos = require("../database/models/vehiculoModel")
const fabricantes = require("../database/models/fabricanteModel")

const getAll = async () => {
    const compras = await compra.findAll({
        include: [{
            model: vehiculos,
            include: {
                model: fabricantes,
                attributes: ["nombre_fab"]
            },
            attributes: ["nombre_veh"]
        },
        {
            model: cliente,
            attributes: ["direccion_cli"]
        }],
        attributes: ["fecha_compra", "precio_compra"]
    });
    return compras
}

const createCompra = async (newcompra) => {
    try {
        const compras = await compra.create(newcompra)
        return compras;
    } catch (error) {
        return error
    }
}

module.exports = {
    getAll,
    createCompra
}