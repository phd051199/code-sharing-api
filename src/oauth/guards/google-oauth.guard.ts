import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { OAuthProviders } from '@/gql/prisma';

@Injectable()
export class GoogleOAuthGuard
  extends AuthGuard(OAuthProviders.google)
  implements CanActivate
{
  async canActivate(context: ExecutionContext) {
    const active = <boolean>await super.canActivate(context);
    const req = context.switchToHttp().getRequest();
    await super.logIn(req);

    return active;
  }
}
