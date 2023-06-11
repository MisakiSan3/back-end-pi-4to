import { PartialType } from '@nestjs/swagger';
import { CreateSubjectDto } from './create-subject.dto';
import { IsOptional, IsString } from 'class-validator';
import { SubjectDto } from './subject.dto';

export class UpdateSubjectDto extends PartialType(SubjectDto) {

    @IsOptional()
    @IsString()
    nombre_a: string; 
}
