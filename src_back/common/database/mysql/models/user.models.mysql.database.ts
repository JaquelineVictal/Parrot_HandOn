import * as Sequelize from "sequelize";
import { MySqlDB } from "../mysql.database";

export default MySqlDB.getInstance().createModel('user',{
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
    created_at: Sequelize.DataTypes.DATE,
    updated_at: Sequelize.DataTypes.DATE,
    deleted_at: Sequelize.DataTypes.DATE,
})