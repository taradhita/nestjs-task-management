import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllTasks', () => {
    it('should return array of tasks', () => {
      const mockTasks: Task[] = [
        {
          id: 'fc5a3b4c-cf3d-4c15-8fef-55478f61da0b',
          title: 'Task 1',
          description: 'Description task 1',
          status: 'OPEN',
        },
        {
          id: 'd4e2c352-b943-4122-976d-5cd28c25a175',
          title: 'Task 2',
          description: 'Description task 2',
          status: 'IN_PROGRESS',
        },
      ];
    });
  });

  describe('createTask', () => {
    //
  });

  describe('updateTask', () => {
    //
  });

  describe('deleteTask', () => {
    //
  });
});
