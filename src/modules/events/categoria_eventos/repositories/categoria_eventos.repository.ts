
import { EntityRepository, Repository } from "typeorm";
import { CategoriaEvento } from "../entities/categoria_evento.entity";

@EntityRepository(CategoriaEvento)
export class CategoriaEventosRepository extends Repository<CategoriaEvento>{

}