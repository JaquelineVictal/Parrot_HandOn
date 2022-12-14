import * as Sequelize from "sequelize";
import { MySqlDatabase } from "../mysql.Database";

export default MySqlDatabase.getInstance().createModel('user',{
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'iduser'
    },
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    apartment: Sequelize.DataTypes.INTEGER,
    password: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
    deletedAt: Sequelize.DataTypes.DATE,
})