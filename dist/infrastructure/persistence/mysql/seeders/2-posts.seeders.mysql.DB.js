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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wb3N0cy5zZWVkZXJzLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjX2JhY2svaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8yLXBvc3RzLnNlZWRlcnMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxrQkFBZTtJQUNYLEVBQUUsRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO1lBQ3BDO2dCQUNJLFFBQVEsRUFBQyxDQUFDO2dCQUNWLFNBQVMsRUFBQyxnREFBZ0Q7Z0JBQzFELFFBQVEsRUFBQyxDQUFDO2FBQUU7WUFDaEI7Z0JBQ0ksUUFBUSxFQUFDLENBQUM7Z0JBQ1YsU0FBUyxFQUFDLGdEQUFnRDtnQkFDMUQsUUFBUSxFQUFDLENBQUM7YUFDYjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFDLEVBQUU7UUFDOUMsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0NBQ0osQ0FBQSJ9