import { PartialType } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString, IsUUID, Length } from 'class-validator';
import { EventoDto } from './events.dto';

export class UpdateEventDto extends PartialType(EventoDto) {
    @IsOptional()
    @IsString()
    nombre_a: string;

    @IsOptional()
    @IsDate()
    fecha_i: Date;
    
    @IsOptional()
    @IsDate()
    fecha_f: Date;

    @IsOptional()
    @IsString()
    @Length(0,100)
    description: string;

    @IsOptional()
    @IsUUID()
    teacher_userid: string;   
}
