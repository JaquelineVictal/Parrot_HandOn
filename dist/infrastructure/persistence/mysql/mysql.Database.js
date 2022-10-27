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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDatabase = void 0;
const Sequelize = __importStar(require("sequelize"));
const db_config_1 = __importDefault(require("../../config/db.config"));
class MySqlDatabase {
    constructor() {
        this._db = db_config_1.default.database;
        this._username = db_config_1.default.username;
        this._password = db_config_1.default.password;
        this._host = db_config_1.default.host;
        this._dialect = 'mysql';
        this._port = Number(db_config_1.default.port);
        this._adapter = new Sequelize.Sequelize(this._db, this._username, this._password, {
            host: this._host,
            dialect: this._dialect,
            port: this._port
        });
    }
    static getInstance() {
        if (!MySqlDatabase._instance) {
            MySqlDatabase._instance = new MySqlDatabase();
        }
        return MySqlDatabase._instance;
    }
    create(model, data) {
        return model.create(data);
    }
    update(model, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield model.update(data);
            return model.save();
        });
    }
    list(model, includes) {
        return model.findAll(includes);
    }
    delete(model, dataWhere) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield model.destroy({
                where: dataWhere
            });
            return (result > 0);
        });
    }
    read(model, dataId, includes) {
        try {
            return model.findByPk(dataId, includes);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    createModel(name, properties) {
        return this._adapter.define(name, properties, {
            timestamps: true
        });
    }
    selectQuery(sql, replacements) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._adapter.query(sql, {
                type: Sequelize.QueryTypes.SELECT,
                replacements: replacements
            });
        });
    }
    readByWhere(model, dataWhere) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model.findOne({
                where: dataWhere
            });
        });
    }
}
exports.MySqlDatabase = MySqlDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmNfYmFjay9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9teXNxbC5EYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUN2Qyx1RUFBOEM7QUFHOUMsTUFBYSxhQUFhO0lBVXRCO1FBQ1ksSUFBSSxDQUFDLEdBQUcsR0FBRyxtQkFBUSxDQUFDLFFBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFRLENBQUMsUUFBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQVEsQ0FBQyxRQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLElBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztZQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtZQUMxQixhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7U0FDakQ7UUFFRCxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFxRCxFQUFFLElBQVM7UUFDbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFSyxNQUFNLENBQUMsS0FBZ0MsRUFBRSxJQUFTOztZQUNwRCxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFeEIsQ0FBQztLQUFBO0lBRUQsSUFBSSxDQUFDLEtBQXFELEVBQUUsUUFBZ0I7UUFDeEUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFSyxNQUFNLENBQUMsS0FBcUQsRUFBRSxTQUFzQzs7WUFDdEcsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsU0FBUzthQUNuQixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUVELElBQUksQ0FBQyxLQUFxRCxFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQUN4RixJQUFHO1lBQ0MsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUFDLE9BQU0sR0FBRyxFQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVksRUFBRSxVQUFxQztRQUMzRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUN2QixJQUFJLEVBQ0osVUFBVSxFQUNWO1lBQ0ksVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVLLFdBQVcsQ0FBQyxHQUFXLEVBQUUsWUFBaUI7O1lBQzVDLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FDNUIsR0FBRyxFQUNIO2dCQUNJLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU07Z0JBQ2pDLFlBQVksRUFBRSxZQUFZO2FBQzdCLENBQ0osQ0FBQztRQUNOLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxLQUFvRCxFQUFFLFNBQXNDOztZQUMxRyxPQUFPLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsS0FBSyxFQUFFLFNBQVM7YUFDbkIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUF4RkQsc0NBd0ZDIn0=