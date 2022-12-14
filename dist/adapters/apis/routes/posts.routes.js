"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const posts_controllers_1 = __importDefault(require("../controllers/posts.controllers"));
const users_middlewares_1 = __importDefault(require("../middlewares/users.middlewares"));
const common_routes_config_1 = require("./common.routes.config");
class PostsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostsRoutes');
    }
    configureRoutes() {
        this.app.route(`/posts`)
            .get(//auth,
        users_middlewares_1.default.compareSync, posts_controllers_1.default.listPosts) // listar posts
            .post(users_middlewares_1.default.compareSync, posts_controllers_1.default.createPost);
        this.app.route(`/posts/:idpost`)
            .all(users_middlewares_1.default.compareSync)
            .put(users_middlewares_1.default.compareSync, posts_controllers_1.default.updatePosts)
            .delete(users_middlewares_1.default.compareSync, posts_controllers_1.default.deletePosts)
            .get(users_middlewares_1.default.compareSync, posts_controllers_1.default.getPostsById);
        //  this.app.route(`/posts/:iduser`)
        // .post(
        //   usersMiddlewares.compareSync,
        //   postsControllers.createPost,
        //    )
        return this.app;
    }
}
exports.PostsRoutes = PostsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjX2JhY2svYWRhcHRlcnMvYXBpcy9yb3V0ZXMvcG9zdHMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUNoRSx5RkFBZ0U7QUFDaEUsaUVBQTREO0FBRTVELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxXQUFXLEVBQzVCLDJCQUFnQixDQUFDLFNBQVMsQ0FDN0IsQ0FBQyxlQUFlO2FBQ2hCLElBQUksQ0FDRCwyQkFBZ0IsQ0FBQyxXQUFXLEVBQzVCLDJCQUFnQixDQUFDLFVBQVUsQ0FDOUIsQ0FBQTtRQUdELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQy9CLEdBQUcsQ0FDQSwyQkFBZ0IsQ0FBQyxXQUFXLENBQUM7YUFDaEMsR0FBRyxDQUNBLDJCQUFnQixDQUFDLFdBQVcsRUFDNUIsMkJBQWdCLENBQUMsV0FBVyxDQUFDO2FBQ2hDLE1BQU0sQ0FDSCwyQkFBZ0IsQ0FBQyxXQUFXLEVBQzVCLDJCQUFnQixDQUFDLFdBQVcsQ0FBQzthQUNoQyxHQUFHLENBQ0EsMkJBQWdCLENBQUMsV0FBVyxFQUM1QiwyQkFBZ0IsQ0FBQyxZQUFZLENBQzVCLENBQUE7UUFFUCxvQ0FBb0M7UUFDbkMsU0FBUztRQUNQLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDOUIsT0FBTztRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUF2Q0Qsa0NBdUNDIn0=