import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TeacherUser } from "../../teacher_user/entities/teacher_user.entity";
import { Teacher } from "src/modules/academic/teachers/entities/teacher.entity";

@Entity('usuario')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    //////////////////////////////////////////////////////////////
    @Column('varchar',{
        name: 'nombre_u',
        length: 20,
        nullable: false,
        comment: 'Nombre del usuario',    
    })
    nombre_u: string;

    @Column('varchar',{
        name: 'apellido_u',
        length: 20,
        nullable: false,
        comment: 'Apellido del usuario',    
    })
    apellido_u: string;

    @Column('varchar',{
        name: 'telf',
        length: 9,
        nullable: true,
        comment: 'Teléfono del usuario',    
    })
    telf: string;

    @Column('varchar',{
        name: 'email',
        unique: true,
        length: 30,
        nullable: false,
        comment: 'Correo del usuario',    
    })
    email: string;

    @Column('varchar',{
        name: 'contrasenia',
        length: 15,
        nullable: false,
        comment: 'Contraseña del usuario',    
    })
    contrasenia: string;
    
    @Column('varchar',{
        name: 'nickname',
        length: 20,
        unique: true,
        nullable: false,
        comment: 'Nickname del usuario',    
    })
    nickname: string;

    @JoinTable()
    @ManyToMany(type=>Teacher,teacher=>teacher.user)
    teacher: Teacher[];

    @OneToMany(type=>TeacherUser,teacheruser=>teacheruser.id_u)
    profesor_usuario: TeacherUser[];

}
