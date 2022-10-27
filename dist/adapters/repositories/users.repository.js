"use strict";
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
exports.UsersRepository = void 0;
const mysql_Database_1 = require("../../infrastructure/persistence/mysql/mysql.Database");
const user_models_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/user.models.mysql.DB"));
const users_modelstoEntities_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/users.modelstoEntities.mysql.DB"));
const users_entitiestoModel_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/users.entitiestoModel.mysql.DB"));
class UsersRepository {
    constructor(_database, _modelUsers) {
        this._database = _database;
        this._modelUsers = _modelUsers;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this._database.read(this._modelUsers, resourceId);
                return (0, users_modelstoEntities_mysql_DB_1.default)(user);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            yield this._database.create(this._modelUsers, userGeneral);
            return resource;
        });
    }
    deletedById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelUsers, { iduser: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._database.list(this._modelUsers);
            const clients = user.map(users_modelstoEntities_mysql_DB_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let userModel = yield this._database.read(this._modelUsers, resource.indexId);
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            yield this._database.update(userModel, userGeneral);
            return resource;
        });
    }
    readByWhere(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const login = yield this._database.readByWhere(this._modelUsers, {
                    email: email,
                    password: password
                });
                return (0, users_modelstoEntities_mysql_DB_1.default)(login);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.UsersRepository = UsersRepository;
exports.default = new UsersRepository(mysql_Database_1.MySqlDatabase.getInstance(), user_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyY19iYWNrL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy91c2Vycy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBGQUFzRjtBQUd0Riw4SEFBMkY7QUFFM0YscUpBQThHO0FBQzlHLG1KQUE0RztBQU01RyxNQUFhLGVBQWU7SUFDeEIsWUFDWSxTQUF5QixFQUN6QixXQUEyRDtRQUQzRCxjQUFTLEdBQVQsU0FBUyxDQUFnQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0Q7SUFDakUsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBSTtnQkFDQSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUE7Z0JBQ3BFLE9BQU8sSUFBQSx5Q0FBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBb0I7O1lBQzdCLE1BQU0sRUFBQyxXQUFXLEVBQUMsR0FBRyxJQUFBLHdDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNELE9BQU8sUUFBUSxDQUFBO1FBQ25CLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxVQUFrQjs7WUFDaEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHlDQUFnQixDQUFDLENBQUE7WUFDMUMsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQW9COztZQUVqQyxJQUFJLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLE9BQVEsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFBLHdDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFFbEQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDcEQsT0FBTyxRQUFRLENBQUM7UUFHcEIsQ0FBQztLQUFBO0lBSUssV0FBVyxDQUFDLEtBQVksRUFBRSxRQUFnQjs7WUFDNUMsSUFBSTtnQkFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzdELEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxRQUFRO2lCQUNyQixDQUFDLENBQUE7Z0JBQ0YsT0FBTyxJQUFBLHlDQUFnQixFQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDdkI7UUFFRCxDQUFDO0tBQUE7Q0FHSjtBQTFERCwwQ0EwREM7QUFDRyxrQkFBZSxJQUFJLGVBQWUsQ0FDOUIsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsRUFDM0IsOEJBQVMsQ0FDWixDQUFBIn0=