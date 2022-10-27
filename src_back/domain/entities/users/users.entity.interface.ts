export interface IUsersEntity{
    indexId?:number,
    name?:string,
    email:string,
    apartment?:number,
    password:string,
    photo?:string
    createdAt?:Date,
    updatedAt?:Date,
    deletedAt?:Date,   
}