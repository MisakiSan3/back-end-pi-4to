import { Module } from '@nestjs/common';
import { TeacherUserService } from './teacher_user.service';
import { TeacherUserController } from './teacher_user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherRepository } from 'src/modules/academic/teachers/repositories/teacher.repositorie';
import { TeacherUser } from './entities/teacher_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherRepository,TeacherUser])],
  controllers: [TeacherUserController],
  providers: [TeacherUserService]
})
export class TeacherUserModule {}
