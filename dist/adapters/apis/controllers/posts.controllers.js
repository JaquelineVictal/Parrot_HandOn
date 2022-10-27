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
const list_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/list.post.usecase"));
const read_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/read.post.usecase"));
const create_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/create.post.usecase"));
const update_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/update.post.usecase"));
const delete_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/delete.post.usecase"));
const log = (0, debug_1.default)('app:posts-controller');
class PostsController {
    listPosts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield list_post_usecase_1.default.execute();
                response.status(200).send(posts);
                debug_1.default.log(posts);
            }
            catch (error) {
                console.error(error);
                response.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORLIST_YES });
            }
        });
    }
    ;
    getPostsById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield read_post_usecase_1.default.execute({
                    idpost: Number(request.params)
                });
                debug_1.default.log(posts);
                response.status(200).send(posts);
                return response.json(posts);
            }
            catch (error) {
                console.log(error);
                return response.status(500).json({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORGETBYID_YES });
            }
        });
    }
    ;
    createPost(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = create_post_usecase_1.default.execute(request.body);
                debug_1.default.log(post);
                response.status(200).send(request.body);
            }
            catch (error) {
                console.error(error);
                response.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORCREATED_YES });
            }
        });
    }
    updatePosts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield update_post_usecase_1.default.execute(request.body);
            try {
                response.status(200).send(request.body);
            }
            catch (error) {
                response.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORUPDATED_YES });
            }
        });
    }
    deletePosts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield delete_post_usecase_1.default.execute({
                    idpost: Number(request.params)
                });
                response.status(204).send();
            }
            catch (error) {
                response.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORDELETED_YES });
            }
        });
    }
}
exports.default = new PostsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmNfYmFjay9hZGFwdGVycy9hcGlzL2NvbnRyb2xsZXJzL3Bvc3RzLmNvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQXlCO0FBQ3pCLHVHQUE4RTtBQUM5RSx5R0FBK0U7QUFDL0UseUdBQStFO0FBQy9FLDZHQUFtRjtBQUNuRiw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBRW5GLE1BQU0sR0FBRyxHQUFtQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTFELE1BQU0sZUFBZTtJQUNYLFNBQVMsQ0FBQyxPQUF3QixFQUFFLFFBQTBCOztZQUNoRSxJQUFJO2dCQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDOUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLGVBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDbkI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSwwQkFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUE7YUFDakc7UUFDVCxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRVEsWUFBWSxDQUFDLE9BQXdCLEVBQUUsUUFBMEI7O1lBQ25FLElBQUk7Z0JBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDeEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFB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