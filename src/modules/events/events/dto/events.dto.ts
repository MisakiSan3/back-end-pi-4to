import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, IsUUID, Length, isDate } from "class-validator";
import { CategoriaEvento } from "../../categoria_eventos/entities/categoria_evento.entity";
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";


export class EventoDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsDate()
    start: Date;
    
    @IsNotEmpty()
    @IsDate()
    end: Date;

    @IsNotEmpty()
    @IsString()
    @Length(0,100)
    description: string;

    @IsNotEmpty()
    categoria: CategoriaEvento;

    @IsNotEmpty()
    maestro: Teacher;
}
