import baseAPi from './config.ts/index';

interface UserPayload {
    nome: string;
    email: string;
    apartment: number;
    content : string;
}

export function User(payload: UserPayload) {
    return baseAPi.post("/users/:id", payload)
}

export function ListarUsers() {
    return baseAPi.get ("/users")
}