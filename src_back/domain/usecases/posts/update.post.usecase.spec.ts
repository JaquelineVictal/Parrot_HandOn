import { PostEntity } from "../../entities/posts/posts.entity";
import createPostUsecase from "./create.post.usecase";
import updatePostUsecase from "./update.post.usecase";


test("Teste unitário do UpdateClientUseCase", async ()=> {
    
    const post: PostEntity ={

        idpost: 1,
        content:"Lorem ipsum et quisque class, lobortis varius",
        iduser:1,
    }
await createPostUsecase.execute(post);

    const post2: PostEntity = {

        idpost: 1,
        content:"Lorem ipsum et quisque class, lobortis varius",
        iduser:1,
    }

    const post3: PostEntity = {

        idpost: 1,
        content:"Lorem ipsum et quisque class, lobortis varius",
        iduser:1,
    }

    expect(await updatePostUsecase.execute(post2)).toMatchObject(post3)
})