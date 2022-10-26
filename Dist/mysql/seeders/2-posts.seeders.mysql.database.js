"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('post', [
            {
                "idpost": 1,
                "content": "Lorem ipsum et quisque class, lobortis varius.",
                "iduser": 1
            },
            {
                "idpost": 2,
                "content": "Lorem ipsum et quisque class, lobortis varius.",
                "iduser": 2
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('post', {});
    }
};
