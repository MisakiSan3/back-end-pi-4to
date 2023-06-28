import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, IsUUID, Length, isDate } from "class-validator";
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";
import { AuthBody } from "../interfaces/login.interface";


export class UserAuthDto implements AuthBody {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    contrasenia: string;

}
