import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoriaEvento } from "../../categoria_eventos/entities/categoria_evento.entity";
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";

@Entity('eventos')
export class Event {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    //////////////////////////////////////////////////////////////
    @Column('varchar',{
        name: 'title',
        length: 30,
        nullable: false,
        comment: 'Nombre del evento',  
    })
    title: string;

    @Column('varchar',{
        name: 'start',
        nullable: false,
        comment: 'Fecha de inicio del evento',  
    })
    start: string;
    
    @Column('varchar',{
        name: 'end',
        nullable: true,
        comment: 'Fecha de finalización del evento',  
    })
    end: string;

    @Column('varchar',{
        name: 'description',
        length: 100,
        nullable: true,
        comment: 'Descripción del evento',  
    })
    description: string;
    
    @ManyToOne(type=> CategoriaEvento, categoriaevento => categoriaevento.eventos)
    categoria: CategoriaEvento;

    @ManyToOne(type=> Teacher, teacher => teacher.event)
    maestro: Teacher;
}
