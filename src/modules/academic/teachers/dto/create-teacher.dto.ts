/* eslint-disable prettier/prettier */
import { OmitType } from "@nestjs/swagger";
import { TeacherDto } from "./teacher.dto";
import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateTeacherDto extends OmitType(TeacherDto,['asignatura']as const){

    @IsNotEmpty()
    @IsUUID()
    asignaturaid: string;
}
