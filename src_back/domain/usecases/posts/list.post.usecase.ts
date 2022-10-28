import { Console } from "console";
import PostsRepository from "../../../adapters/repositories/posts.repository";
import { IPostEntity } from "../../entities/posts/posts.entity.interface";
import { IPostsRepository } from "../../repositories/posts.repositories.interface";
import { IUseCase } from "../usecase.interface";

class ListPostUseCase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(): Promise<IPostEntity[] | undefined | any> {
        return await this._repository.list()        
    }
}

export default new ListPostUseCase(
    PostsRepository
)