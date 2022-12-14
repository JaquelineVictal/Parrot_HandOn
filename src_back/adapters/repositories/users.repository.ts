import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { MySqlDatabase } from "../../infrastructure/persistence/mysql/mysql.Database";
import { IUsersRepository } from "../../domain/repositories/users.repositories.interface";
import * as Sequelize from "sequelize";
import userModel from "../../infrastructure/persistence/mysql/models/user.models.mysql.DB";
import postsModel from "../../infrastructure/persistence/mysql/models/posts.models.mysql.DB";
import modelstoEntities from "../../infrastructure/persistence/mysql/helpers/users.modelstoEntities.mysql.DB";
import entitiestoModel from "../../infrastructure/persistence/mysql/helpers/users.entitiestoModel.mysql.DB";
import bcrypt from "bcryptjs";
import { UserEntity } from "../../domain/entities/users/users.entity";
import { log } from "console";
import { IUsersEntity } from "../../domain/entities/users/users.entity.interface";

export class UsersRepository implements IUsersRepository{
    constructor(
        private _database: IDatabaseModel,
        private _modelUsers: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        ){}
        
    async readById(resourceId: number): Promise<UserEntity | undefined> {
        try {
            const user = await this._database.read(this._modelUsers, resourceId)
            return modelstoEntities(user);
        } catch (error) {
            console.error(error);
        }
    }
    
    async create(resource: UserEntity): Promise<UserEntity> {
        const {userGeneral} = entitiestoModel(resource);
        await this._database.create(this._modelUsers, userGeneral);
        return resource
    }
    
    async deletedById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelUsers, {iduser:resourceId})
    }

    async list(): Promise<UserEntity[]> {
        const user = await this._database.list(this._modelUsers)
        const clients = user.map(modelstoEntities)
        return clients;
    }

    async updateById(resource: UserEntity): Promise<UserEntity | undefined> {

        let userModel = await this._database.read(this._modelUsers, resource.indexId!);
        const { userGeneral } = entitiestoModel(resource);
       
        await this._database.update(userModel, userGeneral);
        return resource;
        
        
    }

    

    async readByWhere(email:string, password: string): Promise<IUsersEntity | undefined> {
        try {
            const login = await this._database.readByWhere(this._modelUsers, {
                email: email, 
                password: password
            })
            return modelstoEntities(login);
        } catch (error) {
        console.error(error)        
    }

    }


}
    export default new UsersRepository(
        MySqlDatabase.getInstance(),
        userModel
    )