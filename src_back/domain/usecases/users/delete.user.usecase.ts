import { IUsersEntity } from "../../entities/users/users.entity.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUsersRepository } from "../../repositories/users.repositories.interface";
import { IUseCase } from "../usecase.interface";

class  DeleteUserUseCase implements IUseCase{
    constructor(private _repository: IUsersRepository){}
    async execute(data: { idpost: number}): Promise<void> {
        return await this._repository.deletedById(data.idpost)        
    }
}


export default new DeleteUserUseCase(
    UsersRepository
)