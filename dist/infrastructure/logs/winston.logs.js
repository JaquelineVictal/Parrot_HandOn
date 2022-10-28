"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.errors({ stack: true }), winston_1.default.format.timestamp(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.File({ filename: path_1.default.resolve('logs', 'error.log'), level: "error" }),
        new winston_1.default.transports.File({ filename: path_1.default.resolve('logs', 'info.log'), level: "info" })
    ]
});
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luc3Rvbi5sb2dzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjX2JhY2svaW5mcmFzdHJ1Y3R1cmUvbG9ncy93aW5zdG9uLmxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsZ0RBQXdCO0FBRXhCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDO0lBQ2hDLE1BQU0sRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLGlCQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUN0QyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDMUIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQ3hCO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsSUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzVGLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztLQUM3RjtDQUVKLENBQUMsQ0FBQztBQUdILGtCQUFlLE1BQU0sQ0FBQyJ9