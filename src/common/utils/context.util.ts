import { type ExecutionContext } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { type FastifyRequest } from 'fastify';

type ExtractedContext = {
  req: FastifyRequest;
  executionContext: ExecutionContext;
};

enum ContextType {
  http = 'http',
  graphql = 'graphql',
}

export const extractContext = (ctx: ExecutionContext): ExtractedContext => {
  let req: FastifyRequest;
  let executionContext: ExecutionContext;

  switch (ctx.getType<ContextType>()) {
    case ContextType.http:
      req = ctx.switchToHttp().getRequest();
      executionContext = ctx;
      break;

    case ContextType.graphql:
      req = GqlExecutionContext.create(ctx).getContext().req;
      executionContext = new ExecutionContextHost([req]);
      break;

    default:
      throw new Error('Unknown context type');
  }

  return {
    req,
    executionContext,
  };
};
