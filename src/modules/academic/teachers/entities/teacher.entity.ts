import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Subject } from "../../subjects/entities/subject.entity";
import { TeacherUser } from "src/modules/user/teacher_user/entities/teacher_user.entity";
import { User } from "src/modules/user/user/entities/user.entity";

@Entity('maestro')
export class Teacher {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //////////////////////////////////////////////////////////////
    @Column('varchar',{
        name: 'nombre_p',
        nullable: false,
        comment: 'Nombre del profesor',    
    })
    nombre_p: string;

    @Column('varchar',{
        name: 'apellido_p',
        nullable: false,
        comment: 'Apellido del profesor',    
    })
    apellido_p: string;

    @Column('varchar',{
        name: 'telf',
        length: 9,
        nullable: true,
        comment: 'Teléfono del profesor',    
    })
    telf: string;

    @Column('varchar',{
        name: 'email',
        unique: true,
        length: 30,
        nullable: false,
        comment: 'Correo del profesor',    
    })
    email: string;

    @ManyToMany(type=>User,user=>user.teacher)
    user: User[];

    @ManyToOne(type=>Subject, subject=> subject.maestro)
    asignatura: Subject;

    @OneToMany(type=>TeacherUser,teacheruser=>teacheruser.id_p)
    profesor_usuario: TeacherUser[];

}
