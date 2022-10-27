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
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const read_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/read.user.usecase"));
const winston_logs_1 = __importDefault(require("../../../infrastructure/logs/winston.logs"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const express_validation_1 = require("express-validation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const log = (0, debug_1.default)('app:users-middleware');
class UsersMiddlerare {
    constructor() {
        this.ValidationCreateUser = (0, express_validation_1.validate)({
            body: express_validation_1.Joi.object({
                name: express_validation_1.Joi.string().required(),
                email: express_validation_1.Joi.string().email().required(),
                apartment: express_validation_1.Joi.number().required(),
                password: express_validation_1.Joi.string().min(8).required(),
                photo: express_validation_1.Joi.string().required(),
            })
        });
        this.loginValid = (0, express_validation_1.validate)({
            body: express_validation_1.Joi.object({
                email: express_validation_1.Joi.string().email().required(),
                password: express_validation_1.Joi.string().min(8).required(),
            })
        });
        this.updateCreateValid = (0, express_validation_1.validate)({
            body: express_validation_1.Joi.object({
                name: express_validation_1.Joi.string(),
                email: express_validation_1.Joi.string().email(),
                apartment: express_validation_1.Joi.number(),
                password: express_validation_1.Joi.string().min(8).regex(/[a-zA-Z0-9]{3,30}/),
                photo: express_validation_1.Joi.string(),
            })
        });
    }
    validateRequiredAccountBodyFields(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.body && request.body.indexId !== undefined) {
                next();
            }
            else {
                response.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.BODYFIELDS_NO });
            }
        });
    }
    validateUserExists(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield read_user_usecase_1.default.execute({
                indexId: Number(request.params.indexId)
            });
            if (users) {
                winston_logs_1.default.info([' Usuário encontrado: ', users]);
                next();
            }
            else {
                winston_logs_1.default.error(`Usuário ${request.params.indexId} não existe`);
                response.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSEXISTS_NO });
            }
        });
    }
    validateUserRepeated(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let rId = request.body.indexId;
            const users = yield read_user_usecase_1.default.execute({
                indexId: rId
            });
            if (!users) {
                next();
            }
            else {
                response.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSREPEATED_YES });
            }
        });
    }
    compareSync(request, response, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = request.header(`Authorization`)) === null || _a === void 0 ? void 0 : _a.replace(`Bearer `, ``);
                if (!token) {
                    response.status(401).send({
                        message: constants_config_1.default.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES
                    });
                }
                else {
                    const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
                    if (typeof decoded === 'string') {
                        response.status(401).send({
                            error: constants_config_1.default.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO
                        });
                    }
                    else {
                        console.log(decoded.indexId);
                        next();
                    }
                }
            }
            catch (error) {
                response.status(401).send({ message: constants_config_1.default.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES });
            }
        });
    }
    uploadFile() {
        return (0, multer_1.default)({
            storage: multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path_1.default.resolve("uploads"));
                },
                filename: (req, file, cb) => [
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`)
                ]
            })
        });
    }
}
exports.default = new UsersMiddlerare();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmNfYmFjay9hZGFwdGVycy9hcGlzL21pZGRsZXdhcmVzL3VzZXJzLm1pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLHVHQUE4RTtBQUM5RSx5R0FBK0U7QUFDL0UsNkZBQStEO0FBQy9ELG9EQUE0QjtBQUM1QixnREFBd0I7QUFDeEIsMkRBQWtEO0FBQ2xELGdFQUErQjtBQUcvQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGVBQWU7SUFBckI7UUE2RUkseUJBQW9CLEdBQUcsSUFBQSw2QkFBUSxFQUFDO1lBQzVCLElBQUksRUFBRSx3QkFBRyxDQUFDLE1BQU0sQ0FBQztnQkFDYixJQUFJLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQzdCLEtBQUssRUFBRSx3QkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDdEMsU0FBUyxFQUFFLHdCQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUNsQyxRQUFRLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUN4QyxLQUFLLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7YUFFakMsQ0FBQztTQUNMLENBQUMsQ0FBQTtRQUVGLGVBQVUsR0FBRyxJQUFBLDZCQUFRLEVBQUM7WUFDbEIsSUFBSSxFQUFFLHdCQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNiLEtBQUssRUFBRSx3QkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDdEMs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