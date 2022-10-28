import listPostUsecase from "./list.post.usecase";

test("Teste unitário do ListPostUsecase", async() => {
    expect(await listPostUsecase.execute()).toEqual([]);
});