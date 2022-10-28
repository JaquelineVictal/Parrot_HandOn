import { UserEntity } from "../../entities/users/users.entity";
import {UsersRepository} from "../../../adapters/repositories/users.repository";
import createUsersUsecase from "./create.users.usecase";

jest.mock("../../../adapters/repositories/users.repository");

const UsersRepositoryMock = UsersRepository as jest.Mock<UsersRepository>

test("Teste unitário createUserUseCase", async ()=> {
    
    const userRepository = new UsersRepositoryMock() as jest.Mocked<UsersRepository>;
    userRepository.create.mockRejectedValue({

        name:"Maria L",
        email:"maria.l@email.com",
        apartment:5,
        password: "ma123",
        photo:"www"
    })

    const user: UserEntity = {

        name: "Jose V",
        email: "jose.v@email.com",
        apartment: 34,
        password: "jo123",
        photo:"www"
    
    }

    expect(await createUsersUsecase.execute(user)).toMatchObject(user)
})