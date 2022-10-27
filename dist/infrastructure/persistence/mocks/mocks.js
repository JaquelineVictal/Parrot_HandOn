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
const create_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/create.users.usecase"));
const faker_mocks_1 = __importDefault(require("./faker.mocks"));
class Mocks {
    constructor(mocksGenerator) {
        this._users = mocksGenerator.getUsers();
    }
    createUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < this._users.length; countUsers++) {
                yield create_users_usecase_1.default.execute(this._users[countUsers]);
            }
            return {
                createdUsers: countUsers
            };
        });
    }
}
const mocks = new Mocks(new faker_mocks_1.default);
mocks.createUsers().then((result) => {
    console.log(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmNfYmFjay9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9tb2Nrcy9tb2Nrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLCtHQUFxRjtBQUNyRixnRUFBdUM7QUFHdkMsTUFBTSxLQUFLO0lBR1AsWUFBWSxjQUFzQjtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUssV0FBVzs7WUFDYixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBQztnQkFDOUQsTUFBTSw4QkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsT0FBTztnQkFDSCxZQUFZLEVBQUUsVUFBVTthQUMzQixDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLHFCQUFVLENBQUMsQ0FBQztBQUV4QyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQyJ9