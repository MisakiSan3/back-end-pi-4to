
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Event } from "src/modules/events/events/entities/event.entity";

@Entity('maestro_usuario')
export class TeacherUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //////////////////////////////////////////////////////////////
    @ManyToOne(type=>Teacher,teacher=> teacher.profesor_usuario)
    id_p: Teacher;

    @ManyToOne(type=>User,user=> user.profesor_usuario)
    id_u: User;

    @OneToMany(type=>Event,event=>event.teacher_user)
    eventos: Event[];

}
