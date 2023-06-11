import { Test, TestingModule } from '@nestjs/testing';
import { TeacherUserService } from './teacher_user.service';

describe('TeacherUserService', () => {
  let service: TeacherUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherUserService],
    }).compile();

    service = module.get<TeacherUserService>(TeacherUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
