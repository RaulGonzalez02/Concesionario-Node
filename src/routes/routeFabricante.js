const routes = require("express").Router()
const fabricantecontroller = require("../controllers/fabricanteController")

routes.get("/:id", fabricantecontroller.getById)
routes.post("/", fabricantecontroller.createFabricates)
module.exports = routes