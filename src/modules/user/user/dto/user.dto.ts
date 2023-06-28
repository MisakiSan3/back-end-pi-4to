import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UsuarioDto {
    
    @IsNotEmpty()
    @IsString()
    nombre_u: string;

    @IsNotEmpty()
    @IsString()
    apellido_u: string;

    @IsNotEmpty()
    @Length(0,9)
    @IsString()
    telf: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

   @IsNotEmpty()
    @IsString()
    contrasenia: string;
    
    @IsNotEmpty()
    @IsString()
nickname: string;
}