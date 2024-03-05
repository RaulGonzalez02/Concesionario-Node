const routes = require("express").Router()
const compracontroller = require("../controllers/comprasController")

routes.get("/", compracontroller.getAll)
routes.post("/", compracontroller.createCompra)

module.exports = routes