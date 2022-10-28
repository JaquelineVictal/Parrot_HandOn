import baseAPi from './config.ts/index';

interface UsuarioPayload {
    nome: string;
    email: string;
    apartamento: number;
    publicacao : number;
}

export function Usuario(payload: UsuarioPayload) {
    return baseAPi.post("/users/:indexId", payload)
}

export function ListarPublicacao() {
    return baseAPi.get ("/users")
}