import { type ICommand } from '@nestjs/cqrs';

export class RemoveFromFavoriteCommand implements ICommand {
  constructor(
    public readonly userId: number,
    public readonly scriptId: number,
  ) {}
}
