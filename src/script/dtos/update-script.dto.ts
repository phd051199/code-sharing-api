import { type BuildStatus } from '@prisma/client';

export class UpdateScriptDto {
  bundle?: string;
  path?: string;
  status?: BuildStatus;
}
