import { File, FileInterceptor } from '@nest-lab/fastify-multer';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Action, Prisma, type Script, User } from '@prisma/client';
import _ from 'lodash';

import { AuthUser, Public } from '@/auth/decorators';
import { Authorized, Permissions } from '@/casl/decorators';
import { can } from '@/casl/utils';

import { CompileScriptCommand, CreateScriptCommand } from './commands';
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
  @Permissions(can(Action.read, Prisma.ModelName.Script))
  getFavorite(@AuthUser() user: User): Promise<Script[]> {
    return this.queryBus.execute(new GetFavoriteScriptsQuery(user.id));
  }

  @Get('self')
  @Authorized()
  @Permissions(can(Action.read, Prisma.ModelName.Script))
  getSelf(@AuthUser() user: User): Promise<Script[]> {
    return this.queryBus.execute(new GetSelfScriptsQuery(user.id));
  }

  @Get(':id(\\d+)')
  @Authorized()
  @Permissions(can(Action.read, Prisma.ModelName.Script))
  getScript(@Param('id', ParseIntPipe) id: number): Promise<Script> {
    return this.queryBus.execute(new GetScriptByIdQuery(id));
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @Authorized()
  @Permissions(can(Action.create, Prisma.ModelName.Script))
  async upload(
    @AuthUser() user: User,
    @UploadedFile() file?: File,
    @Body('data') fileData?: string,
  ): Promise<void> {
    if (_.isNil(file) && _.isNil(fileData)) {
      throw new BadRequestException('No file or data provided');
    }

    const script = await this.commandBus.execute(
      new CreateScriptCommand(user.id),
    );
    await this.commandBus.execute(
      new CompileScriptCommand(fileData ?? file.buffer, script.id),
    );
  }
}
