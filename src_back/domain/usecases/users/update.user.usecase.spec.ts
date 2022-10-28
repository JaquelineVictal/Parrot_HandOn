import { UserEntity } from "../../entities/users/users.entity";
import updateUserUsecase from "./update.user.usecase";
import createUsersUsecase from "./create.users.usecase";


test("Teste unitário ReadClientUseCase", async ()=> {
    
    const user: UserEntity ={

        "name":"Marcos Teixeira",
        "email":"marc@teixeira.com",
        "apartment":23,
        "password": "1516sa",
        "photo":"http://dsjkhsdkljds.com"
    }
await createUsersUsecase.execute(user);

    const user2: UserEntity = {

        indexId: 1,
        name:"Maria L",
        email:"maria.l@email.com",
        apartment:5,
        password: "ma123",
        photo:"www"
    }

    const user3: UserEntity = {

        indexId: 2,
        name: "Jose V",
        email: "jose.v@email.com",
        apartment: 34,
        password: "jo123",
        photo:"www"
    }

    expect(await updateUserUsecase.execute(user2)).toMatchObject(user3)
})