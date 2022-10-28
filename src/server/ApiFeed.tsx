import baseAPi from './config.ts/index';
import {Feed} from '../../src/pages/Feed';

interface ListarPublicacao {
    nome: string;    
    apartamento: number;
    data: number;
    hora: number;
    post : string;
}

export function PublicarFeed () {
    return baseAPi.get("/Feed/posts")
}

export function ListarPublicacao() {
    return baseAPi.post ("/posts")
}