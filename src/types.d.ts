import { type FilesInRequest } from 'fastify-multer/typings/fastify';

import { type User } from './gql/user';

declare module 'fastify' {
  export interface FastifyRequest {
    file: FilesInRequest;
    user: User | GoogleUser | GithubUser;
  }
}
