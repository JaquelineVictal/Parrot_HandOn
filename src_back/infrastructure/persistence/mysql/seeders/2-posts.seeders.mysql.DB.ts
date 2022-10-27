import *as Sequelize from 'sequelize';



export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('post',[
            {
                "idpost":1,
                "content":"Lorem ipsum et quisque class, lobortis varius.",
                "iduser":1 },
            {
                "idpost":2,
                "content":"Lorem ipsum et quisque class, lobortis varius.",
                "iduser":2
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface)=>{
        return queryInterface.bulkDelete('post',{})
    }
}