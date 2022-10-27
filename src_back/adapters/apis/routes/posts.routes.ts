import express from "express";
import postsControllers from "../controllers/posts.controllers";
import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";

export class PostsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/posts`)
        .get(//auth,
        usersMiddlewares.compareSync,
            postsControllers.listPosts,
        ) // listar posts
        .post(
            usersMiddlewares.compareSync,
            postsControllers.createPost,
        ) 


        this.app.route(`/posts/:idpost`)
        .all(
            usersMiddlewares.compareSync,
            postsControllers.listPosts)
        .put(
            usersMiddlewares.compareSync,
            postsControllers.updatePosts)
        .delete(
            usersMiddlewares.compareSync,
            postsControllers.deletePosts)
        .get(
            usersMiddlewares.compareSync,
            postsControllers.getPostsById
                )

        this.app.route(`/posts/:iduser`)
        .post(
            usersMiddlewares.compareSync,
            postsControllers.createPost,
                )
        return this.app
    }
}