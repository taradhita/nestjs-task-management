import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllTasks', () => {
    it('returns empty array when there is no task', async () => {
      const result = await service.getAllTasks();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });
});
