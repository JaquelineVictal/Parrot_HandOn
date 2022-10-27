const db = require("../database");
const { DataTypes } = require("sequelize");


const usuario = db.define(
  "usuario",
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
    apresentacao: {
      type: DataTypes.INTEGER,
    },
     createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "usuario",

  }
);

module.exports = usuario;