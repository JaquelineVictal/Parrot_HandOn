import baseAPi from './config.ts/index';


interface ListarPublicacao {
    nome: string;    
    apartamento: number;
    date: number;
    hora: number;
    post : string;
}

export function PublicarFeed () {
    return baseAPi.get("/feed/posts")
}

export function ListarPublicacao() {
    return baseAPi.post ("/posts")
}