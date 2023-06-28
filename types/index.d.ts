declare namespace NodeJS {
    interface ProcessEnv {
        PORT: number;
        HOST: string;
        USERNAME: string;
        PASSWORD: string;
        DATABASE: string;
        HASH_SALT:number;
        JWT_SECRET:string;
    }
}