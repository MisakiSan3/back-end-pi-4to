import { Module } from '@nestjs/common';
import { CategoriaEventosService } from './categoria_eventos.service';
import { CategoriaEventosController } from './categoria_eventos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEventosRepository } from './repositories/categoria_eventos.repository';
import { CategoriaEvento } from './entities/categoria_evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEventosRepository,CategoriaEvento])],
  controllers: [CategoriaEventosController],
  providers: [CategoriaEventosService]
})
export class CategoriaEventosModule {}
