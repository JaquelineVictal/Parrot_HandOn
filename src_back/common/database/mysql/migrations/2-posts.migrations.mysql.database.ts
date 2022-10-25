import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('posts', {
            idpost: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'idpost'
            },
            iduser: {
                type: Sequelize.DataTypes.INTEGER,
                references:{
                  model: {
                      tableName: 'users'
                  },
                  key: 'iduser'
                }  
              },
            content: Sequelize.DataTypes.STRING,
            created_at: Sequelize.DataTypes.DATE,
            updated_at: Sequelize.DataTypes.DATE,
            deleted_at: Sequelize.DataTypes.DATE,
            
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('posts');
    }
}