import deletePostUsecase from "./delete.post.usecase";

test("Teste unitário do DeletePostUseCase", async() => {
    const post = {
        idpost:0
    }
    expect(await deletePostUsecase.execute(post)).toBeUndefined();
})