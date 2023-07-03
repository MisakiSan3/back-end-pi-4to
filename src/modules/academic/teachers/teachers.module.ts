import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { TeacherRepository } from './repositories/teacher.repositorie';
import { User } from 'src/modules/user/user/entities/user.entity';
import { Subject } from '../subjects/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherRepository, Teacher, Subject])],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
