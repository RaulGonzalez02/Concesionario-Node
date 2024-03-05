const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Compras extends Model { }
Compras.init(
    {
        fecha_compra: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: true
        },
        precio_compra: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "compras",
        timestamps: false,
        freezeTableName: false
    }
)

module.exports = Compras