import express from 'express';
import debug from 'debug';
import bcrypt from 'bcrypt'
import constantsConfig from '../../../infrastructure/config/constants.config';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';
import logger from '../../../infrastructure/logs/winston.logs';
import multer from 'multer';
import path from 'path';
import {validate, Joi, } from 'express-validation'
import jwt from 'jsonwebtoken';


const log: debug.IDebugger = debug('app:users-middleware');

class UsersMiddlerare{
    async validateRequiredAccountBodyFields(request: express.Request, response: express.Response, next: express.NextFunction){
        if( request.body && request.body.indexId !== undefined){
            next();
        } else{
            response.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.BODYFIELDS_NO})
        }
    }

    async validateUserExists(request: express.Request, response: express.Response, next: express.NextFunction){
        const users = await readUserUsecase.execute({
            indexId: Number(request.params.indexId)
        });
        if(users){
            logger.info([' Usuário encontrado: ', users])
            next();
        } else{
            logger.error(`Usuário ${request.params.indexId} não existe`)
            response.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.USERSEXISTS_NO})
        }
    }

    async validateUserRepeated(request: express.Request, response: express.Response, next: express.NextFunction){
        let rId: number = request.body.indexId;
        const users = await readUserUsecase.execute({
            indexId: rId
        });
        if(!users){
            next();
        } else{
            response.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.USERSREPEATED_YES})
        }
    }

    async compareSync(request: express.Request, response: express.Response, next: express.NextFunction){
        try {
            const token = request.header(`Authorization`)?.replace(`Bearer `, ``);

        if(!token){
        response.status(401).send({
            message: constantsConfig.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES
        });

        }else{
    
        const decoded = jwt.verify(token, String( process.env.SECRET_KEY));
        if(typeof decoded === 'string'){
            response.status(401).send({
                error: constantsConfig.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO
            });
        }else{
        console.log(decoded.indexId);
        next();

        }
    }

}
    catch (error) {
        response.status(401).send({message: constantsConfig.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES})
    }

}

    uploadFile(){
        return multer({
            storage: multer.diskStorage({
                destination: (req, file, cb)=>{
                    cb(null, path.resolve("uploads"));
                },
                filename: (req, file, cb)=>[
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`)
                ]
            })
        })
    }

    ValidationCreateUser = validate({
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            apartment: Joi.number().required(),
            password: Joi.string().min(8).required(),
            photo: Joi.string().required(),

        })
    })

    loginValid = validate({
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
        })
    })

    updateCreateValid = validate({
        body: Joi.object({
            name: Joi.string(),
            email: Joi.string().email(),
            apartment: Joi.number(),
            password: Joi.string().min(8).regex(/[a-zA-Z0-9]{3,30}/),
            photo: Joi.string(),
    })
})
}

export default new UsersMiddlerare();