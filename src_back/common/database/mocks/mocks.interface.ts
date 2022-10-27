import { IUsersDto } from "../../user/dtos/user.dto"

export default interface IMocks {
    getUsers(): IUsersDto[];
}