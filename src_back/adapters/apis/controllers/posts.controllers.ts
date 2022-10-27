import express from 'express';
import debug from 'debug'
import constantsConfig from '../../../infrastructure/config/constants.config';
import listPostUsecase from '../../../domain/usecases/posts/list.post.usecase';
import readPostUsecase from '../../../domain/usecases/posts/read.post.usecase';
import createPostUsecase from '../../../domain/usecases/posts/create.post.usecase';
import updatePostUsecase from '../../../domain/usecases/posts/update.post.usecase';
import deletePostUsecase from '../../../domain/usecases/posts/delete.post.usecase';

const log: debug.Debugger = debug('app:posts-controller');

class PostsController {
    async listPosts(request: express.Request, response: express.Response){
        try {
            const posts = await listPostUsecase.execute();
            response.status(200).send(posts);
            debug.log(posts)
        } catch (error) {
            console.error(error);
            response.status(404).send({messages: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.ERRORLIST_YES})
        }
};

    async getPostsById(request: express.Request, response: express.Response){
        try {
            const posts = await readPostUsecase.execute({
                idpost: Number(request.params)
            });

                debug.log(posts)
                response.status(200).send(posts);
            return response.json(posts)
        } catch (error) {
            console.log(error);
            return response.status(500).json({ messages: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.ERRORGETBYID_YES})
        } 
    };

    async createPost(request: express.Request, response: express.Response){
        try {
            const post = createPostUsecase.execute(request.body);
            debug.log(post)
        response.status(200).send(request.body);
        } catch (error) {
            console.error(error)
            response.status(404).send({ messages: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.ERRORCREATED_YES})
        }
    }

    async updatePosts(request: express.Request, response: express.Response){
        const posts = await updatePostUsecase.execute(request.body);
        try {
            response.status(200).send(request.body)
        } catch (error) {
            response.status(404).send({ messages: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.ERRORUPDATED_YES})
        }
    }

    async deletePosts(request: express.Request, response: express.Response){
        try {
            await deletePostUsecase.execute({
                idpost: Number(request.params)
            });
            response.status(204).send();
        } catch (error) {
            response.status(404).send({ messages: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.ERRORDELETED_YES})
        }
}}

export default new PostsController();