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
const users_repository_1 = __importDefault(require("../../../adapters/repositories/users.repository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginUserUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._repository.readByWhere(data.email, data.password);
            if (user) {
                const token = jsonwebtoken_1.default.sign(user, String(process.env.SECRET_KEY), {
                    expiresIn: `2 days`
                });
                return {
                    user: user,
                    token: token
                };
            }
            return;
        });
    }
}
exports.default = new LoginUserUseCase(users_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4udXNlci51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjX2JhY2svZG9tYWluL3VzZWNhc2VzL3VzZXJzL2xvZ2luLnVzZXIudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLHVHQUErRTtBQUMvRSxnRUFBZ0M7QUFFaEMsTUFBTSxnQkFBZ0I7SUFDbEIsWUFBb0IsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBRWpELENBQUM7SUFFSyxPQUFPLENBQUMsSUFBdUM7O1lBQ2pELE1BQU0sSUFBSSxHQUFJLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFdkUsSUFBRyxJQUFJLEVBQUM7Z0JBRVIsTUFBTSxLQUFLLEdBQUcsc0JBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN6RCxTQUFTLEVBQUUsUUFBUTtpQkFDdEIsQ0FBQyxDQUFDO2dCQUVILE9BQU87b0JBRVAsSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLEtBQUs7aUJBQUMsQ0FBQTthQUNoQjtZQUNHLE9BQU07UUFDZCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksZ0JBQWdCLENBQy9CLDBCQUFlLENBQ2xCLENBQUEifQ==