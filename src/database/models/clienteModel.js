const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize");

class Cliente extends Model { }
Cliente.init(
    {
        id_cli: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_cli: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion_cli: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechanac_cli: {
            type: DataTypes.DATE,
            allowNull: false
        },
        telefono_cli: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
    sequelize,
    modelName: "clientes",
    timestamps: false,
    freezeTableName: false
}
)

module.exports = Cliente