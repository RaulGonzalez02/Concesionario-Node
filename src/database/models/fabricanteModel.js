const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize");

class Fabricante extends Model { }
Fabricante.init(
    {
        id_fab: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        nombre_fab: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [5, 10],
                    msg: "Logintud del nombre debe tener entre 5 y 10 caracteres"
                }
            }
        },
        fechanac_fab: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion_fab: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono_fab: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "fabricantes",
        freezeTableName: false,
        timestamps: false
    }
)

module.exports = Fabricante