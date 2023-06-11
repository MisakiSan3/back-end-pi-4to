import { PartialType } from '@nestjs/swagger';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
    @IsOptional()
    @IsString()
    nombre_p: string;

    @IsOptional()
    @IsString()
    apellido_p: string;

    @IsOptional()
    @IsString()
    telf: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsUUID()
    asignaturaid: string;
}
