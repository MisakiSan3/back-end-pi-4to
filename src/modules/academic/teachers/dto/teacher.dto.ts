import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { Subject } from "../../subjects/entities/subject.entity";


export class TeacherDto {

 
    @IsNotEmpty()
    @IsString()
    nombre_p: string;

    @IsNotEmpty()
    @IsString()
    apellido_p: string;

    @IsNotEmpty()
    @IsString()
    telf: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;


    @IsNotEmpty()
    asignatura: Subject;



}
