import { Injectable } from '@nestjs/common';

import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { User } from 'src/modules/user/user/entities/user.entity';
import { UserAuthDto } from './dto/log-in.dto';

@Injectable()
export class LogInService {
  constructor(
    @InjectRepository(User) private userRepostory: Repository<User>
    ){}
    

    async findOne(userAuth: UserAuthDto):Promise<User> {
        try {
            const user: User = await this.userRepostory.createQueryBuilder('maestro').where({userAuth}).getOne()
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

}
