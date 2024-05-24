import { AddToFavoriteCommandHandler } from './add-to-favorite.handler';
import { CompileScriptCommandHandler } from './compile-script.handler';
import { CreateScriptCommandHandler } from './create-script.handler';
import { RemoveFromFavoriteCommandHandler } from './remove-from-favorite.handler';
import { UpdateScriptCommandHandler } from './update-script.handler';
import { UploadScriptCommandHandler } from './upload-script.handler';

export const CommandHandlers = [
  CompileScriptCommandHandler,
  CreateScriptCommandHandler,
  UpdateScriptCommandHandler,
  UploadScriptCommandHandler,
  AddToFavoriteCommandHandler,
  RemoveFromFavoriteCommandHandler,
];
