import PostsRepository from "../../../adapters/repositories/posts.repository";
import { IPostsRepository } from "../../repositories/posts.repositories.interface";
import { IUseCase } from "../usecase.interface";

class DeletePostUseCase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: { idpost: number}): Promise<void> {
        return await this._repository.deletedById(data.idpost)        
    }
}


export default new DeletePostUseCase(
    PostsRepository
)