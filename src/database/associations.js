const Cliente = require("./models/clienteModel")
const Fabricante = require("./models/fabricanteModel")
const Vehiculo = require("./models/vehiculoModel")
const Usuario = require("./models/usuarioModel")
const Compras = require("./models/comprasModel")

/* RELACIONES */
Fabricante.hasMany(Vehiculo)
Vehiculo.belongsTo(Fabricante)

Cliente.belongsToMany(Vehiculo, {through: Compras})
Vehiculo.belongsToMany(Cliente, {through: Compras})

Cliente.hasMany(Compras)
Compras.belongsTo(Cliente)

Vehiculo.hasMany(Compras)
Compras.belongsTo(Vehiculo)

