const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Usuario extends Model { }
Usuario.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos_user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password_user: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "users",
        freezeTableName: false,
        timestamps: false
    }
)

module.exports = Usuario