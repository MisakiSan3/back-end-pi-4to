import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectDto } from './dto/subject.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  async create(@Body() createSubjectDto: SubjectDto) {
    return await this.subjectsService.create(createSubjectDto);
  }

  @Get()
  async findAll() {
    return await this.subjectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.subjectsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return await this.subjectsService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.subjectsService.remove(id);
  }
}
