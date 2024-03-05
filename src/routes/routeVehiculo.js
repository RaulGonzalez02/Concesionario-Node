const routes = require("express").Router()
const vehiculoController = require("../controllers/vehiculoController")

routes.get("/", vehiculoController.getAll)
routes.get("/:name", vehiculoController.getByName)
routes.post("/", vehiculoController.post)
routes.delete("/:id", vehiculoController.deleteVehicle)
routes.put("/:id", vehiculoController.updateVehicle)

module.exports = routes