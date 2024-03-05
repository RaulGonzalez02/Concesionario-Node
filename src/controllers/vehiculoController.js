const vehiculoservice = require("../services/vehiculoService")

const getAll = async (req, res) => {
    const allvehicles = await vehiculoservice.getAll()
    res.json(allvehicles)
}

const getByName = async (req, res) => {
    const vehicle = await vehiculoservice.getByName(req.params.name)
    res.json(vehicle)
}

const post = async (req, res) => {
    const vehicle = await vehiculoservice.post(req.body)
    res.json(vehicle)
}

const deleteVehicle = async (req, res) => {
    const vehicle = await vehiculoservice.deleteVehicle(req.params.id)
    if (vehicle) res.json("Vehiculo eliminado correctamente")
    else res.json("No existe ningun vehiculo con ese id")
}

const updateVehicle = async (req, res) => {
    const vehicle = await vehiculoservice.updateVehicle(req.body, req.params.id)
    res.json(vehicle)
}

module.exports = {
    getAll,
    getByName,
    post,
    deleteVehicle,
    updateVehicle
}