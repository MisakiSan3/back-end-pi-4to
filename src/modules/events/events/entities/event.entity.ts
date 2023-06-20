import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoriaEvento } from "../../categoria_eventos/entities/categoria_evento.entity";
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";

@Entity('eventos')
export class Event {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    //////////////////////////////////////////////////////////////
    @Column('varchar',{
        name: 'nombre_p',
        length: 30,
        nullable: false,
        comment: 'Nombre del evento',  
    })
    nombre_a: string;

    @Column('date',{
        name: 'fecha_i',
        nullable: false,
        comment: 'Fecha de inicio del evento',  
    })
    fecha_i: Date;
    
    @Column('date',{
        name: 'fecha_f',
        nullable: true,
        comment: 'Fecha de finalización del evento',  
    })
    fecha_f: Date;

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
