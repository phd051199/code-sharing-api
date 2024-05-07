import { Test, TestingModule } from '@nestjs/testing';
import { HealthResolver } from './health.resolver';
import { CommandBus } from '@nestjs/cqrs';

describe('HealthResolver', () => {
  let resolver: HealthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthResolver,
        {
          provide: CommandBus,
          useValue: {
            execute: jest.fn().mockResolvedValue({
              status: 'up',
            }),
          },
        },
      ],
    }).compile();

    resolver = module.get<HealthResolver>(HealthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
