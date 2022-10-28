import { PostEntity } from "../../entities/posts/posts.entity";
import readPostUsecase from "./read.post.usecase";
import createPostUsecase from "./create.post.usecase";

test("Teste unitário do ReadPostUseCase", async ()=> {
    
    const post: PostEntity ={

        content:"Lorem ipsum et quisque class, lobortis varius",
        iduser:1,
    }
await createPostUsecase.execute(post);

    const post2: PostEntity = {

        content:"Lorem ipsum et quisque class, lobortis varius",
        iduser:1,
    }

    expect(await readPostUsecase.execute({idpost:0})).toMatchObject(post2)
})