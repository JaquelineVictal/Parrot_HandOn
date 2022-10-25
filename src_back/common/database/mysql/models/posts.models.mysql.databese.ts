import * as Sequelize from "sequelize";
import { MySqlDB } from "../mysql.database";

export default MySqlDB.getInstance().createModel('post',{
    idpost:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpost',
    },
    iduser:{
        type: Sequelize.DataTypes.INTEGER,
        references:{
            model: "users",
            key: "iduser"
        }
    },
    content: Sequelize.DataTypes.STRING,
    created_at: Sequelize.DataTypes.DATE,
    updated_at: Sequelize.DataTypes.DATE,
    deleted_at: Sequelize.DataTypes.DATE,
})