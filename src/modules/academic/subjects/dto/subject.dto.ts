
import { IsString,IsNotEmpty,IsDateString, IsUUID } from "class-validator";

export class SubjectDto {
    @IsNotEmpty()
    @IsString()
    nombre_a: string;
}