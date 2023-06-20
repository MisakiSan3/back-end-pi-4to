import { Injectable } from '@nestjs/common';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectDto } from './dto/subject.dto';
import { Subject } from './entities/subject.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject) private subjectRepostory: Repository<Subject>
    ){}
    

  async create(createSubjectDto: SubjectDto):Promise<Subject> {
    try {
        return await this.subjectRepostory.save(createSubjectDto);
      } catch (e) {
        throw new Error(e);
    }
  }

  async findAll():Promise<Subject[]> {
    try {
        const subjects: Subject[] =await this.subjectRepostory.createQueryBuilder('asignaturas').leftJoinAndSelect('asignaturas.user','user').getMany();
        if (subjects.length === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No existen registros'
          });
        }
        return subjects
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }

  async findOne(id: string):Promise<Subject> {
    try {
        const subject: Subject = await this.subjectRepostory.createQueryBuilder('asignaturas').leftJoinAndSelect('asignaturas.user','user').where({id}).getOne()
        if (!subject) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha encontrado el registro'
          });
        }
        return subject;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }
  async update(id: string, updateSubjectDto: UpdateSubjectDto):Promise<UpdateResult | undefined> {
   try {
       const subject: UpdateResult =  await this.subjectRepostory.update(id,updateSubjectDto);
       if (subject.affected === 0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:'No se ha podido actualizar'
        });
       }
        return subject;
     } catch (e) {
      throw ErrorManager.createSignatureError(e.message)
   }
  }

  async remove(id: string):Promise<DeleteResult | undefined> {
    try {
        const subject: DeleteResult =  await this.subjectRepostory.delete(id);
        if (subject.affected === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha podido borrar'
          });
        }
          return subject;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message)
    }
   }
}
