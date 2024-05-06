import { Test, TestingModule } from '@nestjs/testing';
import { DataGeneratorController } from '../data-generator.controller';
import { QueryBus } from '@nestjs/cqrs';

describe('DataGeneratorController', () => {
  let controller: DataGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataGeneratorController],
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

    controller = module.get<DataGeneratorController>(DataGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
