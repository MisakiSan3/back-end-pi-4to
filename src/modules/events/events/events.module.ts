import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosRepository } from './repositories/events.repository';
import { Event } from './entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventosRepository,Event])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
