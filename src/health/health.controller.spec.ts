import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { QueryBus } from '@nestjs/cqrs';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn().mockResolvedValue({
              status: 'up',
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
