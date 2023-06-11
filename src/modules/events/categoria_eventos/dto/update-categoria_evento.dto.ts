import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaEventoDto } from './create-categoria_evento.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoriaEventoDto extends PartialType(CreateCategoriaEventoDto) {
    @IsOptional()
    @IsString()
    nombre_c: string;
}
