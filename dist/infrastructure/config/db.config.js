"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: 'mysql',
};
exports.default = dbConfig;
module.exports = dbConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjX2JhY2svaW5mcmFzdHJ1Y3R1cmUvY29uZmlnL2RiLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUF1QjtBQUV2QixNQUFNLFFBQVEsR0FBRztJQUNiLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDekIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQzdCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDekIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUM3QixPQUFPLEVBQUUsT0FBTztDQUNuQixDQUFBO0FBR0Qsa0JBQWUsUUFBUSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIn0=