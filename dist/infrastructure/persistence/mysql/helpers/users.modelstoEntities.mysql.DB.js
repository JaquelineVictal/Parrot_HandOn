"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function default_1(user) {
    if (!user)
        return;
    let shufflePass = bcrypt_1.default.hashSync(user.password, 10);
    let userGeneral = {
        indexId: user.indexId,
        name: user.name,
        apartment: user.apartment,
        email: user.email,
        password: shufflePass,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        photo: user.photo
    };
    //
    if (user.logado) {
        userGeneral.indexId = user.indexId;
        userGeneral.name = user.name(userGeneral).apartment = user.apartment;
        userGeneral.email = user.email;
        userGeneral.password = user.password;
        userGeneral.createdAt = user.createdAt;
        userGeneral.updatedAt = user.updatedAt;
        userGeneral.photo = user.photo;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWxzdG9FbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyY19iYWNrL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL2hlbHBlcnMvdXNlcnMubW9kZWxzdG9FbnRpdGllcy5teXNxbC5EQi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUc1QixtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLFdBQVcsR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRXBELElBQUksV0FBVyxHQUFpQjtRQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTO1FBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztLQUNwQixDQUFBO0lBQ0wsRUFBRTtJQUNFLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUNWLFdBQTRCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEQsV0FBNEIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDN0MsV0FBMkIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hELFdBQTRCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEQsV0FBNEIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxXQUE0QixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hELFdBQTRCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEQsV0FBNEIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNwRDtJQUVELE9BQVEsV0FBNEIsQ0FBQztBQUN6QyxDQUFDO0FBN0JELDRCQTZCQyJ9