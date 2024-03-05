const routes = require("express").Router();
const clienteController = require("../controllers/clienteController");

routes.get("/", clienteController.getAll)
routes.get("/:id", clienteController.getOneByID)
routes.post("/", clienteController.post)

module.exports = routes