import loginUserUsecase from "./login.user.usecase";


test("Teste unitário do DeleteUserUseCase", async() => {
    const user = { 
        email: "maria.l@email.com", 
        password: "ma123" }

    expect(await loginUserUsecase.execute(user)).toBeUndefined();
})