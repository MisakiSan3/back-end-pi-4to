import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDto } from './dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepostory: Repository<User>
    ){}
    

  async create(createuserDto: UsuarioDto):Promise<User> {
    try {
        const user: User = await this.userRepostory.save(createuserDto);
        return user;
      } catch (e) {
        throw new Error(e);
    }
  }

  async findAll():Promise<User[]> {
    try {
        const users: User[] =await this.userRepostory.find();
        if (users.length === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No existen registros'
          });
        }
        return users
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }

  async findOne(id: string):Promise<User> {
    try {
        const user: User = await this.userRepostory.createQueryBuilder('maestro').where({id}).getOne()
        if (!user) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha encontrado el registro'
          });
        }
        return user;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }
  async update(id: string, updateeventDto: UpdateUserDto):Promise<UpdateResult | undefined> {
   try {
       const user: UpdateResult =  await this.userRepostory.update(id,updateeventDto);
       if (user.affected === 0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:'No se ha podido actualizar'
        });
       }
        return user;
     } catch (e) {
      throw ErrorManager.createSignatureError(e.message)
   }
  }

  async remove(id: string):Promise<DeleteResult | undefined> {
    try {
        const user: DeleteResult =  await this.userRepostory.delete(id);
        if (user.affected === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha podido borrar'
          });
        }
          return user;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message)
    }
   }
}