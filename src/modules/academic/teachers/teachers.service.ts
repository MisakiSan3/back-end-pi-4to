import { Injectable } from '@nestjs/common';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { TeacherDto } from './dto/teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher) private teacherRepostory: Repository<Teacher>
    ){}
    

  async create(createteacherDto: TeacherDto):Promise<Teacher> {
    try {
        const teacher: Teacher = await this.teacherRepostory.save(createteacherDto);
        return teacher;
      } catch (e) {
        throw new Error(e);
    }
  }

  async findAll():Promise<Teacher[]> {
    try {
        const teachers: Teacher[] =await this.teacherRepostory.createQueryBuilder('maestro').
        leftJoinAndSelect('maestro.asignatura','asignatura')
        .leftJoinAndSelect('asignatura.user','user').getMany();
        if (teachers.length === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No existen registros'
          });
        }
        return teachers
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }

  async findOne(id: string):Promise<Teacher> {
    try {
        const teacher: Teacher = await this.teacherRepostory.createQueryBuilder('maestro')
        .leftJoinAndSelect('maestro.asignatura','asignatura')
        .leftJoinAndSelect('asignatura.user','user')
        .where({id}).getOne()
        if (!teacher) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha encontrado el registro'
          });
        }
        return teacher;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }
  async update(id: string, updateteacherDto: UpdateTeacherDto):Promise<UpdateResult | undefined> {
   try {
       const teacher: UpdateResult =  await this.teacherRepostory.update(id,updateteacherDto);
       if (teacher.affected === 0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:'No se ha podido actualizar'
        });
       }
        return teacher;
     } catch (e) {
      throw ErrorManager.createSignatureError(e.message)
   }
  }

  async remove(id: string):Promise<DeleteResult | undefined> {
    try {
        const teacher: DeleteResult =  await this.teacherRepostory.delete(id);
        if (teacher.affected === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha podido borrar'
          });
        }
          return teacher;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message)
    }
   }
}
