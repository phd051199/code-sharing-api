import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class BaseCrudService<
  T,
  FindFirstArg,
  FindUniqueArg,
  FindManyArg,
  GroupByArg,
  AggregateArg,
  CreateArg,
  CreateManyArg,
  UpdateArg,
  UpdatedManyArg,
  DeleteArg,
  DeleteManyArg,
> {
  constructor(public readonly prisma: PrismaService) {}

  findId(id: number): Promise<T | null> {
    return this.prisma[this.modelName].findUnique({
      where: { id },
    });
  }
  findFirst(args: FindFirstArg): Promise<T | null> {
    return this.prisma[this.modelName].findFirst(args);
  }
  findUnique(args: FindUniqueArg): Promise<T | null> {
    return this.prisma[this.modelName].findUnique(args);
  }
  findUniqueOrThrow(args: FindUniqueArg): Promise<T | null> {
    return this.prisma[this.modelName].findUniqueOrThrow(args);
  }
  findMany(args: FindManyArg): Promise<T[]> {
    return this.prisma[this.modelName].findMany(args);
  }
  groupBy(args: GroupByArg) {
    return this.prisma[this.modelName].groupBy(args);
  }
  aggregate(args: AggregateArg) {
    return this.prisma[this.modelName].aggregate(args);
  }
  create(args: CreateArg): Promise<T> {
    return this.prisma[this.modelName].create(args);
  }
  createMany(args: CreateManyArg) {
    return this.prisma[this.modelName].createMany(args);
  }
  update(args: UpdateArg): Promise<T> {
    return this.prisma[this.modelName].update(args);
  }
  updateMany(args: UpdatedManyArg): Promise<T[]> {
    return this.prisma[this.modelName].updateMany(args);
  }
  delete(args: DeleteArg): Promise<T> {
    return this.prisma[this.modelName].delete(args);
  }
  deleteMany(args: DeleteManyArg): Promise<T[]> {
    return this.prisma[this.modelName].deleteMany(args);
  }

  private get modelName(): string {
    return this.constructor.name.replace('Service', '');
  }
}
