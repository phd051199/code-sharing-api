import { GetFavoriteScriptsQueryHandler } from './get-favorite-scripts.handler';
import { GetPublicScriptsQueryHandler } from './get-public-scripts.handler';
import { GetScriptByIdQueryHandler } from './get-script-by-id.handler';
import { GetSelfScriptsQueryHandler } from './get-self-scripts.handler';

export const QueryHandlers = [
  GetPublicScriptsQueryHandler,
  GetSelfScriptsQueryHandler,
  GetScriptByIdQueryHandler,
  GetFavoriteScriptsQueryHandler,
];
