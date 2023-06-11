import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherUserService } from './teacher_user.service';
import { CreateTeacherUserDto } from './dto/create-teacher_user.dto';
import { UpdateTeacherUserDto } from './dto/update-teacher_user.dto';
import { MaestroUsuarioDto } from './dto/teacher_user.dto';

@Controller('teacher-user')
export class TeacherUserController {
  constructor(private readonly teacherUserService: TeacherUserService) {}

  @Post()
  async create(@Body() createTeacherUserDto: MaestroUsuarioDto) {
    return await this.teacherUserService.create(createTeacherUserDto);
  }

  @Get()
  async findAll() {
    return await this.teacherUserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.teacherUserService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeacherUserDto: UpdateTeacherUserDto) {
    return await this.teacherUserService.update(id, updateTeacherUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.teacherUserService.remove(id);
  }
}
