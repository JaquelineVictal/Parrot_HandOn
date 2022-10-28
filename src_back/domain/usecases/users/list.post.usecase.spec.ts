import listPostUsecase from "./list.user.usecase";

test("Teste unitário do ListUserUsecase", async() => {
    expect(await listPostUsecase.execute()).toEqual([]);
});