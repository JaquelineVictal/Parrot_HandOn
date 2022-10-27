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
        return queryInterface.createTable('posts', {
            idpost: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'idpost'
            },
            iduser: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'users'
                    },
                    key: 'iduser'
                }
            },
            content: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            deletedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('posts');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wb3N0cy5taWdyYXRpb25zLm15c3FsLmRiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjX2JhY2svaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbWlncmF0aW9ucy8yLXBvc3RzLm1pZ3JhdGlvbnMubXlzcWwuZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUV2QyxrQkFBZTtJQUNYLEVBQUUsRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87Z0JBQ2pDLFVBQVUsRUFBQztvQkFDVCxLQUFLLEVBQUU7d0JBQ0gsU0FBUyxFQUFFLE9BQU87cUJBQ3JCO29CQUNELEdBQUcsRUFBRSxRQUFRO2lCQUNkO2FBQ0Y7WUFDSCxPQUFPLEVBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3JDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSixDQUFBIn0=