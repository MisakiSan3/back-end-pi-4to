import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Event } from "../../events/entities/event.entity";

@Entity('categoria_evento')
export class CategoriaEvento {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    //////////////////////////////////////////////////////////////
    @Column('varchar',{
        name: 'nombre_c',
        length: 20,
        nullable: false,
        comment: 'Nombre de la categoria de eventos',  
    })
    nombre_c: string;
    
    @OneToMany(type=> Event, event => event.categoria)
    eventos: Event[];
}
