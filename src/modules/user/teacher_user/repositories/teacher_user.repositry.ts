
import { EntityRepository, Repository } from "typeorm";
import { TeacherUser } from "../entities/teacher_user.entity";

@EntityRepository(TeacherUser)
export class TeacherUserRepository extends Repository<TeacherUser>{

}