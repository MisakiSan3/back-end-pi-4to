import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  async create(@Body() createTeacherDto: TeacherDto) {
    return await this.teachersService.create(createTeacherDto);
  }

  @Get()
  async findAll() {
    return await this.teachersService.findAll();
  }
  @Get('byUser/:id')
  async findAllbyUser(@Param('id') id:string) {
    return await this.teachersService.findAllbyUser(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.teachersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return await this.teachersService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.teachersService.remove(id);
  }
}
