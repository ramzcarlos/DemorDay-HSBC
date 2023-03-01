export class Usuario {

id: number;
nombre: string;
apellido: string;
email: string;
username: string;
pass: string;
}

export interface Credentials{
    email:string;
    pass:string;
}