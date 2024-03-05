const routes = require("express").Router();
const clienteRoutes = require("./routeCliente")
const vehiculoRoutes = require("./routeVehiculo")
const fabricanteroute = require("./routeFabricante")
const comprasroute= require("./routeCompras")
routes.use("/clientes", clienteRoutes)
routes.use("/vehiculos", vehiculoRoutes)
routes.use("/fabricantes", fabricanteroute)
routes.use("/compras",comprasroute)
module.exports = routes;