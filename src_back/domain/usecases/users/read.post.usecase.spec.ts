import { UserEntity } from "../../entities/users/users.entity";
import readUserUsecase from "./read.user.usecase";
import createUsersUsecase from "./create.users.usecase";


test("Teste unitário do ReadClientUseCase", async ()=> {
    
    const user: UserEntity ={

        name:"Maria L",
        email:"maria.l@email.com",
        apartment:5,
        password: "ma123",
        photo:"www"
    }
await createUsersUsecase.execute(user);

    const user2: UserEntity = {

        name: "Jose V",
        email: "jose.v@email.com",
        apartment: 34,
        password: "jo123",
        photo:"www"
    }

    expect(await readUserUsecase.execute({indexId:0})).toMatchObject(user2)
})