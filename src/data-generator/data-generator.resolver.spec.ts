import { Test, TestingModule } from '@nestjs/testing';
import { DataGeneratorResolver } from './data-generator.resolver';
import { QueryBus } from '@nestjs/cqrs';

describe('DataGeneratorResolver', () => {
  let resolver: DataGeneratorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DataGeneratorResolver,
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

    resolver = module.get<DataGeneratorResolver>(DataGeneratorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
