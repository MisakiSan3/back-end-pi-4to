import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsuarioDto } from './dto/user.dto';
import { PublicAccess } from 'src/modules/auth/decorators/public.decorator';
import { LoginGuard } from 'src/modules/auth/guards/login.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';


@Controller('user')
//@PublicAccess()
@UseGuards(LoginGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: UsuarioDto) {
    return await this.userService.create(createUserDto);
  }
  
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
