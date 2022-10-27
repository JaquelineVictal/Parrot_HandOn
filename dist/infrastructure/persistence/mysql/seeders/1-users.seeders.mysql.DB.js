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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2Vycy5zZWVkZXJzLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjX2JhY2svaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXVzZXJzLnNlZWRlcnMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZTtJQUNYLEVBQUUsRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDO1lBQ3JDO2dCQUNJLFFBQVEsRUFBQyxDQUFDO2dCQUNWLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixXQUFXLEVBQUMsQ0FBQztnQkFDYixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsT0FBTyxFQUFDLDhXQUE4VzthQUN6WDtZQUNEO2dCQUNJLFFBQVEsRUFBQyxDQUFDO2dCQUNWLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixXQUFXLEVBQUMsRUFBRTtnQkFDZCxVQUFVLEVBQUUsU0FBUztnQkFDckIsT0FBTyxFQUFDLG1NQUFtTTthQUU5TTtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFDLEVBQUU7UUFDOUMsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0NBQ0osQ0FBQSJ9