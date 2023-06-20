import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { SubjectDto } from './subject.dto';

export class UpdateSubjectDto extends PartialType(SubjectDto) {

    @IsOptional()
    @IsString()
    nombre_a: string; 

    @IsOptional()
    @IsUUID()
    asignaturaid: string;
}
