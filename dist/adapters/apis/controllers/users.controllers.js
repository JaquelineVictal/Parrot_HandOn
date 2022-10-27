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
const debug_1 = __importDefault(require("debug"));
const list_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/list.user.usecase"));
const read_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/read.user.usecase"));
const create_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/create.users.usecase"));
const update_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/update.user.usecase"));
const delete_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/delete.user.usecase"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const login_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/login.user.usecase"));
const log = (0, debug_1.default)('app:users-controller');
class UsersController {
    listUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield list_user_usecase_1.default.execute();
            response.status(200).send(users);
        });
    }
    ;
    getUsersById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield read_user_usecase_1.default.execute({
                indexId: Number(request.params.indexId)
            });
            try {
                if (users) {
                    response.status(200).send(users);
                }
            }
            catch (error) {
                console.log(error);
                return response.status(500).json({ message: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES });
            }
        });
    }
    ;
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield create_users_usecase_1.default.execute(request.body);
                log(users);
                response.status(201).send(request.params.indexId);
            }
            catch (error) {
                console.error(error);
                response.status(400).send(error);
            }
        });
    }
    updateUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield update_user_usecase_1.default.execute(request.body);
            console.log("CONSOLE DO CONTROLLER");
            response.status(200).send(user);
        });
    }
    deleteUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            yield delete_user_usecase_1.default.execute({
                indexId: Number(request.params.indexId)
            });
            response.status(204).send();
        });
    }
    loginBy(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield login_user_usecase_1.default.execute(request.body);
                if (user) {
                    response.status(200).send(user);
                }
                else {
                    response.status(401).send({ error: constants_config_1.default.AUTHENTICATOR.MESSAGES.ERROR.LOGININCORRECT_YES });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createUserBulk(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < request.body.fileData.length; countUsers++) {
                yield create_users_usecase_1.default.execute(request.body.fileData[countUsers]);
            }
            response.status(201).send({
                createdUsers: countUsers
            });
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmNfYmFjay9hZGFwdGVycy9hcGlzL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQXlCO0FBQ3pCLHlHQUErRTtBQUMvRSx5R0FBK0U7QUFDL0UsK0dBQXFGO0FBQ3JGLDZHQUFtRjtBQUNuRiw2R0FBbUY7QUFDbkYsdUdBQThFO0FBQzlFLDJHQUFpRjtBQUlqRixNQUFNLEdBQUcsR0FBbUIsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxRCxNQUFNLGVBQWU7SUFDWCxTQUFTLENBQUMsT0FBd0IsRUFBRSxRQUEwQjs7WUFDaEUsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFUSxZQUFZLENBQUMsT0FBd0IsRUFBRSxRQUEwQjs7WUFDbkUsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUMxQyxDQUFDLENBQUM7WUFDSCxJQUFJO2dCQUNBLElBQUksS0FBSyxFQUFDO29CQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElB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