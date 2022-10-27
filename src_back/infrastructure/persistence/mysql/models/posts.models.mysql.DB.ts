import * as Sequelize from "sequelize";
import { MySqlDatabase } from "../mysql.Database";

export default MySqlDatabase.getInstance().createModel('post',{
    idpost:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpost',
    },
    content: Sequelize.DataTypes.STRING,
    iduser:{
        type: Sequelize.DataTypes.INTEGER,
        references:{
            model: "users",
            key: "iduser"
        }
    },
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
    deletedAt: Sequelize.DataTypes.DATE,
})