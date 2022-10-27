import express from 'express';
import debug from 'debug'
import listUserUsecase from '../../../domain/usecases/users/list.user.usecase';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';
import createUsersUsecase from '../../../domain/usecases/users/create.users.usecase';
import updateUserUsecase from '../../../domain/usecases/users/update.user.usecase';
import deleteUserUsecase from '../../../domain/usecases/users/delete.user.usecase';
import constantsConfig from '../../../infrastructure/config/constants.config';
import loginUserUsecase from '../../../domain/usecases/users/login.user.usecase';



const log: debug.Debugger = debug('app:users-controller');

class UsersController {
    async listUsers(request: express.Request, response: express.Response){
        const users = await listUserUsecase.execute();
        response.status(200).send(users);
};

    async getUsersById(request: express.Request, response: express.Response){
        const users = await readUserUsecase.execute({
            indexId: Number(request.params.indexId)
        });
        try {
            if (users){
                response.status(200).send(users);
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES})
        } 
    };

    async createUser(request: express.Request, response: express.Response){
        try {
            const users = await createUsersUsecase.execute(request.body);
            log(users);
        response.status(201).send(request.params.indexId);
        } catch (error) {
            console.error(error)
            response.status(400).send(error)
        }
    }

    async updateUsers(request: express.Request, response: express.Response){
        const user = await updateUserUsecase.execute(request.body);
        console.log("CONSOLE DO CONTROLLER")
        response.status(200).send(user)
    }

    async deleteUsers(request: express.Request, response: express.Response){
        await deleteUserUsecase.execute({
            indexId: Number(request.params.indexId)
        });
        response.status(204).send();
    }

    async loginBy(request: express.Request, response: express.Response){
        try {
            const user = await loginUserUsecase.execute(request.body);
        if(user){
            response.status(200).send(user)
        } else{
            response.status(401).send({error: constantsConfig.AUTHENTICATOR.MESSAGES.ERROR.LOGININCORRECT_YES}) 
        }
        } catch (error) {
            console.log(error)
        }
        
        
}
    async createUserBulk(request: express.Request, response: express.Response) {
        let countUsers = 0;
        for(countUsers = 0; countUsers < request.body.fileData.length; countUsers++){
            await createUsersUsecase.execute(request.body.fileData[countUsers]);
        }
        response.status(201).send({
            createdUsers: countUsers
        });
    }
}

export default new UsersController();