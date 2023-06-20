import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { TeacherDto } from './teacher.dto';

export class UpdateTeacherDto extends PartialType(TeacherDto) {
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
