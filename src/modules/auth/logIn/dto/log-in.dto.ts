import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, IsUUID, Length, isDate } from "class-validator";
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";


export class UserAuthDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}
