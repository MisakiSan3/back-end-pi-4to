export interface PayLoadToken {
    sub: string;
    name: string;
}

export interface AuthBody {
    email: string;
    contrasenia:string;
}
export interface AuthTokenResult {
    sub:  string;
    name: string;
    iat:  number;
    exp:  number;
}

export interface IUseToken {
    sub:  string;
    name: string;
    isExpired: boolean
}
