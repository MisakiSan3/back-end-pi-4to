import { Test, TestingModule } from '@nestjs/testing';
import { TeacherUserController } from './teacher_user.controller';
import { TeacherUserService } from './teacher_user.service';

describe('TeacherUserController', () => {
  let controller: TeacherUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherUserController],
      providers: [TeacherUserService],
    }).compile();

    controller = module.get<TeacherUserController>(TeacherUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
