const vehiculo = require("../database/models/vehiculoModel")

const getAll = async () => {
    const allvehicles = await vehiculo.findAll()
    return allvehicles
}

const getByName = async (name) => {
    const vehicle = await vehiculo.findAll({ where: { nombre_veh: name } })
    return vehicle;
}

const post = async (newVehicle) => {
    const vehicle = await vehiculo.create(newVehicle)
    return vehicle
}

const deleteVehicle = async (id) => {
    const vehicle = await vehiculo.destroy({ where: { id_veh: id } })
    return vehicle
}

const updateVehicle = async (newVehicle, id) => {
    const updatevehicle = await vehiculo.update(newVehicle, { where: { id_veh: id } })
    const vehicle = await getByName(newVehicle.nombre_veh)
    return vehicle
}

module.exports = {
    getAll,
    getByName,
    post,
    deleteVehicle,
    updateVehicle
}