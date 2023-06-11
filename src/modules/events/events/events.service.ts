import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EventoDto } from './dto/events.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { CategoriaEvento } from '../categoria_eventos/entities/categoria_evento.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepostory: Repository<Event>
    ){}
    

  async create(createeventDto: EventoDto):Promise<Event> {
    try {
        const event: Event = await this.eventRepostory.save(createeventDto);
        return event;
      } catch (e) {
        throw new Error(e);
    }
  }

  async findAll():Promise<Event[]> {
    try {
        const events: Event[] =await this.eventRepostory.createQueryBuilder('eventos')
        .leftJoinAndSelect('eventos.teacher_user','maestro_usuario')
        .leftJoinAndSelect('maestro_usuario.id_p','maestro')
        .leftJoinAndSelect('maestro.asignatura','asignatura')
        .leftJoinAndSelect('maestro_usuario.id_u','usuario')
        .leftJoinAndSelect('eventos.categoria','categoria')
        .getMany();
        if (events.length === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No existen registros'
          });
        }
        return events
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }

  async findOne(id: string):Promise<Event> {
    try {
        const event: Event = await this.eventRepostory.createQueryBuilder('events').where({id}).getOne()
        if (!event) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha encontrado el registro'
          });
        }
        return event;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }
  async update(id: string, updateeventDto: UpdateEventDto):Promise<UpdateResult | undefined> {
   try {
       const event: UpdateResult =  await this.eventRepostory.update(id,updateeventDto);
       if (event.affected === 0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:'No se ha podido actualizar'
        });
       }
        return event;
     } catch (e) {
      throw ErrorManager.createSignatureError(e.message)
   }
  }

  async remove(id: string):Promise<DeleteResult | undefined> {
    try {
        const event: DeleteResult =  await this.eventRepostory.delete(id);
        if (event.affected === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha podido borrar'
          });
        }
          return event;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message)
    }
   }
}
