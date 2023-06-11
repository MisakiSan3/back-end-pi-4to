import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Teacher } from "../../teachers/entities/teacher.entity";

@Entity('asignaturas')
export class Subject {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //////////////////////////////////////////////////////////////
    @Column('varchar',{
        name: 'nombre_m',
        length: 20,
        nullable: false,
        comment: 'Nombre de la materia',  
    })
    nombre_a: string;
    
    @OneToMany(type=> Teacher, teacher => teacher.asignatura)
    maestro: Teacher[];
}
