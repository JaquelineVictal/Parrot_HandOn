"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
const mysql_Database_1 = require("../mysql.Database");
exports.default = mysql_Database_1.MySqlDatabase.getInstance().createModel('user', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'iduser'
    },
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    apartment: Sequelize.DataTypes.INTEGER,
    password: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
    deletedAt: Sequelize.DataTypes.DATE,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbHMubXlzcWwuREIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmNfYmFjay9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9tb2RlbHMvdXNlci5tb2RlbHMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUN2QyxzREFBa0Q7QUFFbEQsa0JBQWUsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFDO0lBQzFELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDakMsVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsS0FBSyxFQUFFLFFBQVE7S0FDbEI7SUFDRCxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ2hDLEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDakMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztJQUN0QyxRQUFRLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3BDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7SUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtJQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0NBQ3RDLENBQUMsQ0FBQSJ9