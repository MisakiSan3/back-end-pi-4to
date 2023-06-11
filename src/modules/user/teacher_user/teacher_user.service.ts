import { Injectable } from '@nestjs/common';

import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherUser } from './entities/teacher_user.entity';
import { MaestroUsuarioDto } from './dto/teacher_user.dto';
import { ErrorManager } from 'src/utils/error.manager';;
import { UpdateTeacherUserDto } from './dto/update-teacher_user.dto';



@Injectable()
export class TeacherUserService {
  constructor(
    @InjectRepository(TeacherUser) private maestroUsuarioRepostory: Repository<TeacherUser>
    ){}
    

  async create(createmaestroUsuarioDto: MaestroUsuarioDto):Promise<TeacherUser> {
    try {
        const maestroUsuario: TeacherUser = await this.maestroUsuarioRepostory.save(createmaestroUsuarioDto);
        return maestroUsuario;
      } catch (e) {
        throw new Error(e);
    }
  }

  async findAll():Promise<TeacherUser[]> {
    try {
        const maestroUsuarios: TeacherUser[] =await this.maestroUsuarioRepostory.createQueryBuilder('maestro_usuario')
        .leftJoinAndSelect('maestro_usuario.id_p','maestro')
        .leftJoinAndSelect('maestro.asignatura','asignatura')
        .leftJoinAndSelect('maestro_usuario.id_u','usuario')
        .getMany();
        if (maestroUsuarios.length === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No existen registros'
          });
        }
        return maestroUsuarios
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }

  async findOne(id: string):Promise<TeacherUser> {
    try {
        const maestroUsuario: TeacherUser = await this.maestroUsuarioRepostory.createQueryBuilder('maestro').where({id})
        .leftJoinAndSelect('maestro_usuario.id_p','maestro')
        .leftJoinAndSelect('maestro_usuario.id_u','usuario')
        .getOne()
        if (!maestroUsuario) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha encontrado el registro'
          });
        }
        return maestroUsuario;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }
  async update(id: string, updatemaestroUsuarioDto: UpdateTeacherUserDto ):Promise<UpdateResult | undefined> {
   try {
       const maestroUsuario: UpdateResult =  await this.maestroUsuarioRepostory.update(id,updatemaestroUsuarioDto);
       if (maestroUsuario.affected === 0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:'No se ha podido actualizar'
        });
       }
        return maestroUsuario;
     } catch (e) {
      throw ErrorManager.createSignatureError(e.message)
   }
  }

  async remove(id: string):Promise<DeleteResult | undefined> {
    try {
        const maestroUsuario: DeleteResult =  await this.maestroUsuarioRepostory.delete(id);
        if (maestroUsuario.affected === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha podido borrar'
          });
        }
          return maestroUsuario;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message)
    }
   }
}
