"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const users_middlewares_1 = __importDefault(require("../middlewares/users.middlewares"));
const common_routes_config_1 = require("./common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/users`)
            .get(
        // usersMiddlewares.compareSync,
        users_controllers_1.default.listUsers); // listar usuários,
        this.app.route(`/register`)
            .post(users_middlewares_1.default.validateUserRepeated, users_controllers_1.default.createUser);
        this.app.route(`/users/:indexId`)
            .all(users_middlewares_1.default.validateUserExists)
            .put(users_middlewares_1.default.compareSync, users_middlewares_1.default.validateUserExists, users_controllers_1.default.updateUsers)
            .delete(users_middlewares_1.default.compareSync, users_middlewares_1.default.validateUserExists, users_controllers_1.default.deleteUsers)
            .get(users_middlewares_1.default.compareSync, users_controllers_1.default.getUsersById);
        this.app.route(`/login`)
            .post(users_controllers_1.default.loginBy);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjX2JhY2svYWRhcHRlcnMvYXBpcy9yb3V0ZXMvdXNlcnMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUNoRSx5RkFBZ0U7QUFDaEUsaUVBQTREO0FBRTVELE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRztRQUNBLGdDQUFnQztRQUNoQywyQkFBZ0IsQ0FBQyxTQUFTLENBQzdCLENBQUEsQ0FBQyxtQkFBbUI7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQzFCLElBQUksQ0FDRCwyQkFBZ0IsQ0FBQyxvQkFBb0IsRUFDckMsMkJBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDaEMsR0FBRyxDQUNBLDJCQUFnQixDQUFDLGtCQUFrQixDQUFDO2FBQ3ZDLEdBQUcsQ0FDQSwyQkFBZ0IsQ0FBQyxXQUFXLEVBQzVCLDJCQUFnQixDQUFDLGtCQUFrQixFQUNuQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUM7YUFDaEMsTUFBTSxDQUNILDJCQUFnQixDQUFDLFdBQVcsRUFDNUIsMkJBQWdCLENBQUMsa0JBQWtCLEVBQ25DLDJCQUFnQixDQUFDLFdBQVcsQ0FBQzthQUNoQyxHQUFHLENBQ0EsMkJBQWdCLENBQUMsV0FBVyxFQUM1QiwyQkFBZ0IsQ0FBQyxZQUFZLENBQzVCLENBQUM7UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDbkIsSUFBSSxDQUNELDJCQUFnQixDQUFDLE9BQU8sQ0FFM0IsQ0FBQTtRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUF4Q0QsZ0NBd0NDIn0=