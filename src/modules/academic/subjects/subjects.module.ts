import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { SubjectRepository } from './repositories/subject.repositorie';



@Module({
  imports: [TypeOrmModule.forFeature([SubjectRepository,Subject])],
  controllers: [SubjectsController],
  providers: [SubjectsService]
})
export class SubjectsModule {}
