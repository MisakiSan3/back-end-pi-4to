import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { TeacherRepository } from './repositories/teacher.repositorie';



@Module({
  imports: [TypeOrmModule.forFeature([TeacherRepository,Teacher])],
  controllers: [TeachersController],
  providers: [TeachersService]
})
export class TeachersModule {}
