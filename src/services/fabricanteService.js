const fabricante = require("../database/models/fabricanteModel")
const vehiculo = require("../database/models/vehiculoModel")

const getById = async (id) => {
    const fabricantes = await fabricante.findAll({
        include: {
            model: vehiculo,
            attributes: ["nombre_veh", "precio_veh", "unidades_veh"]
        },
        attributes: ["nombre_fab"],
        where: {
            "id_fab": id
        }
    })
    return fabricantes
}

const createFabricates = async (newfabricate) => {
    try {
        const fabricate = await fabricante.create(newfabricate)
        return fabricate;
    } catch (error) {
        console.log(error.errors[0].message);
        return error.errors[0].message
    }
}

module.exports = {
    getById,
    createFabricates
}