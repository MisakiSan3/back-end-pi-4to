import { PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';
import { IsDate, IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class UpdateEventDto extends PartialType(CreateEventDto) {
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
