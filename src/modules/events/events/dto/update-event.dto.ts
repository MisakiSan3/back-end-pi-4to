import { PartialType } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString, IsUUID, Length } from 'class-validator';
import { EventoDto } from './events.dto';

export class UpdateEventDto extends PartialType(EventoDto) {
    @IsOptional()
    @IsString()
    nombre_a: string;

    @IsOptional()
    @IsString()
    fecha_i: string;
    
    @IsOptional()
    @IsString()
    fecha_f: string;

    @IsOptional()
    @IsString()
    @Length(0,100)
    description: string;

    @IsOptional()
    @IsUUID()
    teacher_userid: string;   
}
