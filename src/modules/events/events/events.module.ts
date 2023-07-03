import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosRepository } from './repositories/events.repository';
import { Event } from './entities/event.entity';
import { CategoriaEvento } from '../categoria_eventos/entities/categoria_evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventosRepository,Event,CategoriaEvento])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
