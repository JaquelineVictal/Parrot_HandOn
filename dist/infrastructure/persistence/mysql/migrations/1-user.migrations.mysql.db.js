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
exports.default = {
    up: (queryInterface) => {
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
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            deletedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('users');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLm1pZ3JhdGlvbnMubXlzcWwuZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmNfYmFjay9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9taWdyYXRpb25zLzEtdXNlci5taWdyYXRpb25zLm15c3FsLmRiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFFdkMsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN2QyxhQUFhLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDakMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEtBQUssRUFBRSxRQUFRO2dCQUNmLGFBQWEsRUFBRSxJQUFJO2FBQ3RCO1lBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNoQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2pDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87WUFDdEMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNwQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2pDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSixDQUFBIn0=