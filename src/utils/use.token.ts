import { AuthTokenResult, IUseToken } from "src/modules/auth/logIn/interfaces/login.interface";
import * as jwt from 'jsonwebtoken' 

export const useToken = (token:string): IUseToken | string =>{
try {
    const decode = jwt.decode(token) as AuthTokenResult;

    const currentDate = new Date();
    const expiresDate = new Date(decode.exp)
    return {
        sub: decode.sub,
        name: decode.name,
        isExpired: +expiresDate <= +currentDate / 1000,
    };
} catch (error) {
    return 'El token no es valido'
    
}
}