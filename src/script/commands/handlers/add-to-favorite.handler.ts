import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/services';

import { AddToFavoriteCommand } from '../impl';

@CommandHandler(AddToFavoriteCommand)
export class AddToFavoriteCommandHandler
  implements ICommandHandler<AddToFavoriteCommand>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(command: AddToFavoriteCommand) {
    await this.scriptService.addToFavorite(command.userId, command.scriptId);
  }
}
