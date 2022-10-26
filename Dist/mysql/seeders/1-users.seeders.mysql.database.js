"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('user2', [
            {
                "iduser": 1,
                "name": "Maria L",
                "email": "maria.l@gmail.com",
                "apartment": 2,
                "password": "maria123",
                "photo": "https://img.freepik.com/fotos-gratis/conceito-de-felicidade-bem-estar-e-confianca-mulher-afro-americana-atraente-alegre-corte-de-cabelo-encaracolado-peito-de-bracos-cruzados-em-pose-poderosa-e-segura-sorrindo-determinado-usar-sueter-amarelo_176420-35063.jpg?w=900&t=st=1666823363~exp=1666823963~hmac=6b84c106fcef0eb625f4be07be9901761cd03f12d887a4004aad658ca646005d"
            },
            {
                "iduser": 2,
                "name": "José V",
                "email": "jose.v@gmail.com",
                "apartment": 24,
                "password": "jose123",
                "photo": "https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano_23-2149072219.jpg?w=900&t=st=1666823424~exp=1666824024~hmac=1468232883b66e8736b318a9ea9473ef1df04f69cbce9977538960e9dfae8a4d"
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('user2', {});
    }
};
