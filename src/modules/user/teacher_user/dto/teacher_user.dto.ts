import { IsNotEmpty, IsUUID } from "class-validator";
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";
import { User } from "../../user/entities/user.entity";


export class MaestroUsuarioDto {

    @IsNotEmpty()
    id_p: Teacher;

    @IsNotEmpty()
    id_u: User;
}