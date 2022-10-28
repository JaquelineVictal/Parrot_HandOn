import baseAPi from './config.ts/index';

interface Login {    
    email: string;
    password: string;    
}

export function Login() {
    return baseAPi.post("/login")
}

export function Cadastro() {
    return baseAPi.post ("/register")
}