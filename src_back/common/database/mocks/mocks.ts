import { IUsersDto } from "../../user/dtos/user.dto"
//import createUsers from 
import FakerMocks from "./faker.mocks";
import IMocks from "./mocks.interface";

class Mocks {
    private _users: IUsersDto[];

    constructor(mocksGenerator: IMocks){
        this._users = mocksGenerator.getUsers();
    }

    async createUsers(){
        let countUsers = 0;
        for(countUsers = 0; countUsers < this._users.length; countUsers++){
            await createUsers.execute(this._users[countUsers]);
        }
        return {
            createdUsers: countUsers
        };
    } 
}

const mocks = new Mocks(new FakerMocks);

mocks.createUsers().then((result) => {
    console.log(result);
});