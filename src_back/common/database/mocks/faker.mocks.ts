import { IUsersDto } from "../../user/dtos/user.dto"
import IMocks from "./mocks.interface";
import { faker } from "@faker-js/faker"
// import usersRepository from 

export default class FakerMocks implements IMocks{
    getUsers(): IUsersDto []{
        let users: IUsersDto [] = [];
        users = this.getUsers();
        return (this.getUsers() as IUsersDto []);
    }

    private _getUsers(): IUsersDto[]{
        const users: IUsersDto[] = [];
        Array.from({ length: 10}).forEach(()=>{
            users.push({
                indexId: Number(faker.finance.amount()),
                name: faker.name.fullName(),
                email: String(faker.internet.email),
                apartment:Number(faker.finance.amount()),
                password: String(faker.internet.password),
                photo: faker.image.people()
            })
        })
        return users;
    }

}