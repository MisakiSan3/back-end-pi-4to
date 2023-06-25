import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogInService } from './logIn.service';
import { UserAuthDto } from './dto/log-in.dto';



@Controller('auth')
export class LogInController {
  constructor(private readonly loginService: LogInService) {}

  @Post()
  async create(@Body() createEventDto: UserAuthDto) {
    return await this.loginService.findOne(createEventDto);
  }

  
}
