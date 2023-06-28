import { Injectable } from '@nestjs/common';

import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { User } from 'src/modules/user/user/entities/user.entity';
import { UserAuthDto } from './dto/log-in.dto';
import { UserService } from 'src/modules/user/user/user.service';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';
import { PayLoadToken } from './interfaces/login.interface';
import { jwtConstants } from '../jwt.constants';


@Injectable()
export class LogInService {
  constructor(
    @InjectRepository(User) private userRepostory: Repository<User>,
    private readonly userService: UserService,
    
  ) { }

  public async validateUser(email: string, contrasenia: string):Promise<User | null> {
    const userByUsername = await this.userService.findBy({
      key: 'nickname',
      value: email
    });
    const userByEmail = await this.userService.findBy({
      key: 'email',
      value: email
    });

    if (userByUsername) {
      const match = await bcrypt.compare(contrasenia, userByUsername.contrasenia)
      if (match) return userByUsername;
    }
    if (userByEmail) {
      const match = await bcrypt.compare(contrasenia, userByEmail.contrasenia)
      if (match) return userByEmail;
    }
    return null;

  }

  public signJWT({ 
    payload,
    secret,
     expires, 
    }: { 
      payload: jwt.JwtPayload;
       secret: string; 
       expires: number | string;
       }) {
        return jwt.sign(payload, secret, { expiresIn: expires });
       }
  
  public async generateJWT(user: User):Promise<any>{
        const getUser = await this.userService.findOne(user.id);
        const payload: PayLoadToken = {
          sub: getUser.id,
          name: getUser.nombre_u
        }
        return {
          accessToke: this.signJWT({
            payload,
            secret: jwtConstants.secret,
            expires: '1h',
            
          }),
          user,
        }
       }
 /* async findOne(userAuth: UserAuthDto):Promise<User> {
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
    }*/

}
