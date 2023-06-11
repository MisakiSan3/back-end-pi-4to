import { PartialType } from '@nestjs/swagger';
import { CreateTeacherUserDto } from './create-teacher_user.dto';
import { IsOptional, IsUUID } from 'class-validator';
import { User } from '../../user/entities/user.entity';
import { Teacher } from 'src/modules/academic/teachers/entities/teacher.entity';

export class UpdateTeacherUserDto extends PartialType(CreateTeacherUserDto) {

    @IsOptional()
    @IsUUID()
    id_p: Teacher;

    @IsOptional()
    @IsUUID()
    id_u: User;
}
