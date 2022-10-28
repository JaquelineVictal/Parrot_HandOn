import deletePostUsecase from "./delete.user.usecase";

test("Teste unitário do DeleteUserUseCase", async() => {
    const post = {
        indexId:0
    }
    expect(await deletePostUsecase.execute(post)).toBeUndefined();
})