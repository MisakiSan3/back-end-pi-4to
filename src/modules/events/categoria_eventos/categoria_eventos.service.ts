/* eslint-disable prettier/prettier */
 import { Injectable } from '@nestjs/common';
import { CategoriaEventoDto } from './dto/categoria.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CategoriaEvento } from './entities/categoria_evento.entity';
import { ErrorManager } from 'src/utils/error.manager';
import { UpdateCategoriaEventoDto } from './dto/update-categoria_evento.dto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CategoriaEventosService {
  constructor(
    @InjectRepository(CategoriaEvento) private categoryEventRepostory: Repository<CategoriaEvento>
    ){}
    

  async create(createcategoryeventDto: CategoriaEventoDto):Promise<CategoriaEvento> {
    try {
        const categoryevent: CategoriaEvento = await this.categoryEventRepostory.save(createcategoryeventDto);
        return categoryevent;
      } catch (e) {
        throw new Error(e);
    }
  }

  async findAll():Promise<CategoriaEvento[]> {
    try {
        const categoryevents: CategoriaEvento[] =await this.categoryEventRepostory.find();
        if (categoryevents.length === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No existen registros'
          });
        }
        return categoryevents
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }

  async findOne(id: string):Promise<CategoriaEvento> {
    try {
        const categoryevent: CategoriaEvento = await this.categoryEventRepostory.createQueryBuilder('maestro').where({id}).getOne()
        if (!categoryevent) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha encontrado el registro'
          });
        }
        return categoryevent;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message);
    }
  }
  async update(id: string, updatevategoryeventDto: UpdateCategoriaEventoDto):Promise<UpdateResult | undefined> {
   try {
       const categoryevent: UpdateResult =  await this.categoryEventRepostory.update(id,updatevategoryeventDto);
       if (categoryevent.affected === 0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:'No se ha podido actualizar'
        });
       }
        return categoryevent;
     } catch (e) {
      throw ErrorManager.createSignatureError(e.message)
   }
  }

  async remove(id: string):Promise<DeleteResult | undefined> {
    try {
        const categoryevent: DeleteResult =  await this.categoryEventRepostory.delete(id);
        if (categoryevent.affected === 0) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message:'No se ha podido borrar'
          });
        }
          return categoryevent;
      } catch (e) {
        throw ErrorManager.createSignatureError(e.message)
    }
   }
}
