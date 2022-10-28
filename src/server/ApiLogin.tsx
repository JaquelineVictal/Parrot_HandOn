import baseAPi from './config.ts/index';

interface Login {    
    email: string;
    password: string;    
}

export function Login() {
    return baseAPi.post("/login")
}

interface Register {
    name: string;
    email: string;
    password: string;    
    apartament: number;
    photo: string;
}

export function Register() {
    return baseAPi.post ("/register")
}