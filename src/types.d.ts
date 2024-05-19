import { type User } from './gql/user';

declare module 'fastify' {
  export interface FastifyRequest {
    user: User | GoogleUser | GithubUser;
  }
}
