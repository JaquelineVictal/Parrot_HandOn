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
exports.default = mysql_Database_1.MySqlDatabase.getInstance().createModel('post', {
    idpost: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpost',
    },
    content: Sequelize.DataTypes.STRING,
    iduser: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: "users",
            key: "iduser"
        }
    },
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
    deletedAt: Sequelize.DataTypes.DATE,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kZWxzLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjX2JhY2svaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbW9kZWxzL3Bvc3RzLm1vZGVscy5teXNxbC5EQi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBQ3ZDLHNEQUFrRDtBQUVsRCxrQkFBZSw4QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUM7SUFDMUQsTUFBTSxFQUFDO1FBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztRQUNqQyxVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsUUFBUTtLQUNsQjtJQUNELE9BQU8sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDbkMsTUFBTSxFQUFDO1FBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztRQUNqQyxVQUFVLEVBQUM7WUFDUCxLQUFLLEVBQUUsT0FBTztZQUNkLEdBQUcsRUFBRSxRQUFRO1NBQ2hCO0tBQ0o7SUFDRCxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0lBQ25DLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7SUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtDQUN0QyxDQUFDLENBQUEifQ==