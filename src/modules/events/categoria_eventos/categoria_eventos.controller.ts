import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaEventosService } from './categoria_eventos.service';
import { UpdateCategoriaEventoDto } from './dto/update-categoria_evento.dto';
import { CategoriaEventoDto } from './dto/categoria.dto';

@Controller('categoria-eventos')
export class CategoriaEventosController {
  constructor(private readonly categoriaEventosService: CategoriaEventosService) {}

  @Post()
  async create(@Body() createCategoriaEventoDto: CategoriaEventoDto) {
    return await this.categoriaEventosService.create(createCategoriaEventoDto);
  }

  @Get()
  async findAll() {
    return await this.categoriaEventosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoriaEventosService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoriaEventoDto: UpdateCategoriaEventoDto) {
    return await this.categoriaEventosService.update(id, updateCategoriaEventoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoriaEventosService.remove(id);
  }
}
