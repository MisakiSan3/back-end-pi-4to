import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { isArray } from 'class-validator';
import { Observable } from 'rxjs';
import { PUBLIC_KEY } from 'src/constants/key-decorator';
import { UserService } from 'src/modules/user/user/user.service';
import { useToken } from 'src/utils/use.token';
import { IUseToken } from '../logIn/interfaces/login.interface';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';



@Injectable()

export class LoginGuard implements CanActivate {

  constructor(

    private readonly userService: UserService,
    private readonly reflector: Reflector
  ) { }
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      PUBLIC_KEY,
      context.getHandler()
    );

    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest<Request>()

    const token = req.headers['kuyayana_token']

    if (!token || Array.isArray(token)) {
      throw new UnauthorizedException('El token es invalido');
    }

    const manageToken: IUseToken | string = useToken(token)

    if (typeof manageToken === 'string') {
      throw new UnauthorizedException(manageToken);
    }

    if (manageToken.isExpired) {
      throw new UnauthorizedException('El token ha expirado');
    }

    const { sub } = manageToken;
    const user = await this.userService.findOne(sub);

    if (!user) {
      throw new UnauthorizedException('El usuario no existe');
    }

    req.idUser = user.id
    req.nameUser = user.nombre_u
    return true;
  }
}
