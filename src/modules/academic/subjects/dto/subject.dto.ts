
import { IsString,IsNotEmpty,IsDateString, IsUUID } from "class-validator";
import { User } from "src/modules/user/user/entities/user.entity";

export class SubjectDto {
    @IsNotEmpty()
    @IsString()
    nombre_a: string;

    @IsNotEmpty()
    user: User;
}