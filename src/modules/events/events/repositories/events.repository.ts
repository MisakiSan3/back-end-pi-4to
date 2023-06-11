
import { EntityRepository, Repository } from "typeorm";
import { Event } from "../entities/event.entity";

@EntityRepository(Event)
export class EventosRepository extends Repository<Event>{

}