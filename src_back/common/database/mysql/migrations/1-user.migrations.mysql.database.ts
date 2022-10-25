import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            iduindexIdser: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'iduser',
                autoIncrement: true
            },
            name: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
            apartment: Sequelize.DataTypes.INTEGER,
            password: Sequelize.DataTypes.STRING,
            photo: Sequelize.DataTypes.STRING,
            created_at: Sequelize.DataTypes.DATE,
            updated_at: Sequelize.DataTypes.DATE,
            deleted_at: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}