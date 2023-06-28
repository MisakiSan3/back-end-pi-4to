import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogInService } from './logIn.service';
import { UserAuthDto } from './dto/log-in.dto';
import { AuthBody } from './interfaces/login.interface';



@Controller('auth')
export class LogInController {
  constructor(private readonly loginService: LogInService) {}

  /*@Post()
  async create(@Body() createEventDto: UserAuthDto) {
    return await this.loginService.findOne(createEventDto);
  }*/
  @Post('login')
  async login(@Body() { email, contrasenia }: UserAuthDto){
    const userValidate = await this.loginService.validateUser(
      email,
      contrasenia
    );

    if (!userValidate) {
      throw new Error('Usuario o contraseña incorrectos');
    }
    
    const jwt = await this.loginService.generateJWT(userValidate);
    return jwt;
  }
}
