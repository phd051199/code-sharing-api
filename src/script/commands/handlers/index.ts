import { CompileScriptCommandHandler } from './compile-script.handler';
import { CreateScriptCommandHandler } from './create-script.handler';
import { UpdateScriptCommandHandler } from './update-script.handler';
import { UploadScriptCommandHandler } from './upload-script.handler';

export const CommandHandlers = [
  CompileScriptCommandHandler,
  CreateScriptCommandHandler,
  UpdateScriptCommandHandler,
  UploadScriptCommandHandler,
];
