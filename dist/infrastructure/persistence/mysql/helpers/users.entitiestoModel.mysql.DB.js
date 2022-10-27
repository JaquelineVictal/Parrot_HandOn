"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
//brcrypt
function default_1(user) {
    let shufflePass = bcrypt_1.default.hashSync(user.password, 10);
    const userGeneral = {
        indexId: user.indexId,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: user.password,
        photo: user.photo,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.updatedAt,
    };
    return {
        userGeneral: userGeneral
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZW50aXRpZXN0b01vZGVsLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjX2JhY2svaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvaGVscGVycy91c2Vycy5lbnRpdGllc3RvTW9kZWwubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsU0FBUztBQUdULG1CQUF5QixJQUFrQjtJQUN2QyxJQUFJLFdBQVcsR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ25ELE1BQU0sV0FBVyxHQUFHO1FBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtRQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7S0FFNUIsQ0FBQTtJQUVELE9BQU87UUFDSCxXQUFXLEVBQUUsV0FBVztLQUMzQixDQUFDO0FBQ04sQ0FBQztBQWxCRCw0QkFrQkMifQ==