import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { UsuarioDto } from './user.dto';

export class UpdateUserDto extends PartialType(UsuarioDto) {

    @IsOptional()
    @IsString()
    nombre_u: string;

    @IsOptional()
    @IsString()
    apellido_u: string;

    @IsOptional()
    @Length(0,9)
    @IsString()
    telf: string;

    @IsOptional()
    @IsEmail()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    contrasenia: string;
    
    @IsOptional()
    @IsString()
    nickname: string;
}
