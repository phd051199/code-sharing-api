import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/services';

import { RemoveFromFavoriteCommand } from '../impl';

@CommandHandler(RemoveFromFavoriteCommand)
export class RemoveFromFavoriteCommandHandler
  implements ICommandHandler<RemoveFromFavoriteCommand>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(command: RemoveFromFavoriteCommand) {
    await this.scriptService.removeFromFavorite(
      command.userId,
      command.scriptId,
    );
  }
}
