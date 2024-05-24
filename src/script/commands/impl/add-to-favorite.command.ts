import { type ICommand } from '@nestjs/cqrs';

export class AddToFavoriteCommand implements ICommand {
  constructor(
    public readonly userId: number,
    public readonly scriptId: number,
  ) {}
}
