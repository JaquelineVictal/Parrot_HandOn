import { PostEntity } from "../../entities/posts/posts.entity";
import {PostsRepository} from "../../../adapters/repositories/posts.repository";
import createPostsUsecase from "./create.post.usecase";

jest.mock("../../../adapters/repositories/Posts.repository");

const PostsRepositoryMock = PostsRepository as jest.Mock<PostsRepository>

test("Teste unitário do createPostUseCase", async ()=> {
    
    const userRepository = new PostsRepositoryMock() as jest.Mocked<PostsRepository>;
    userRepository.create.mockRejectedValue({

        content:"Lorem ipsum et quisque class, lobortis varius",
        iduser:1,
    })

    const user: PostEntity = {

        content:"Lorem ipsum et quisque class, lobortis varius",
        iduser:1,
    
    }

    expect(await createPostsUsecase.execute(user)).toMatchObject(user)
})