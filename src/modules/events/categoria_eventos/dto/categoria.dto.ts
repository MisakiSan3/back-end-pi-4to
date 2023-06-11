import { IsEmail, IsNotEmpty, IsString, IsUUID, Length } from "class-validator";


export class CategoriaEventoDto {

    @IsNotEmpty()
    @IsString()
    nombre_c: string;
}
