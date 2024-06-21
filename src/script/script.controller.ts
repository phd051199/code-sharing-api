import { File, FileInterceptor } from '@nest-lab/fastify-multer';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Action, Prisma, type Script } from '@prisma/client';
import { diskStorage } from 'fastify-multer';
import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import path, { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

import { AuthUser, Public } from '@/auth/decorators';
import { Authorized, CheckPermissions } from '@/casl/decorators';
import { can } from '@/casl/utils';
import { FileExceptionFilter } from '@/common/filters';
import { ScriptUncheckedCreateInput } from '@/gql/script';
import { FileExtensionValidator } from '@/validation/custom-validator';

import {
  AddToFavoriteCommand,
  CompileScriptCommand,
  CreateScriptCommand,
  RemoveFromFavoriteCommand,
} from './commands';
import {
  GetFavoriteScriptsQuery,
  GetPublicScriptsQuery,
  GetScriptByIdQuery,
  GetSelfScriptsQuery,
} from './queries';

@Controller('script')
export class ScriptController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  @Public()
  getPublic(): Promise<Script[]> {
    return this.queryBus.execute(new GetPublicScriptsQuery());
  }

  @Get('favorite')
  @Authorized()
  @CheckPermissions(can(Action.read, Prisma.ModelName.Script))
  getFavorite(@AuthUser('id') userId: number): Promise<Script[]> {
    return this.queryBus.execute(new GetFavoriteScriptsQuery(userId));
  }

  @Get('self')
  @Authorized()
  @CheckPermissions(can(Action.read, Prisma.ModelName.Script))
  getSelf(@AuthUser('id') userId: number): Promise<Script[]> {
    return this.queryBus.execute(new GetSelfScriptsQuery(userId));
  }

  @Get(':id(\\d+)')
  @Authorized()
  @CheckPermissions(can(Action.read, Prisma.ModelName.Script))
  getScript(@Param('id', ParseIntPipe) id: number): Promise<Script> {
    return this.queryBus.execute(new GetScriptByIdQuery(id));
  }

  @Post('upload')
  @Authorized()
  @CheckPermissions(can(Action.create, Prisma.ModelName.Script))
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (_req, _file, callback): void =>
          callback(null, mkdtempSync(join(tmpdir(), 'upload-'))),
        filename: (_req, file, callback): void =>
          callback(null, uuidv4() + path.extname(file.originalname)),
      }),
    }),
  )
  @UseFilters(FileExceptionFilter)
  async upload(
    @AuthUser('id') userId: number,
    @Body() body: ScriptUncheckedCreateInput,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileExtensionValidator({
            accepted: ['js', 'ts'],
          }),
        ],
      }),
    )
    file: File,
  ): Promise<void> {
    const script = await this.commandBus.execute(
      new CreateScriptCommand(body, userId),
    );
    await this.commandBus.execute(new CompileScriptCommand(file.path, script));
  }

  @Post('favorite/:scriptId(\\d+)')
  @Authorized()
  @CheckPermissions(can(Action.create, 'UserFavorite'))
  async addToFavorite(
    @AuthUser('id') userId: number,
    @Param('scriptId', ParseIntPipe) scriptId: number,
  ): Promise<void> {
    await this.commandBus.execute(new AddToFavoriteCommand(userId, scriptId));
  }

  @Delete('favorite/:scriptId(\\d+)')
  @Authorized()
  @CheckPermissions(can(Action.delete, 'UserFavorite'))
  async removeFavorite(
    @AuthUser('id') userId: number,
    @Param('scriptId', ParseIntPipe) scriptId: number,
  ): Promise<void> {
    await this.commandBus.execute(
      new RemoveFromFavoriteCommand(userId, scriptId),
    );
  }
}
