export interface IPostEntity{
    idpost?: number,
    content:string,
    createdAt?:Date,
    updatedAt?:Date
    deletedAt?:Date
    iduser: number
}