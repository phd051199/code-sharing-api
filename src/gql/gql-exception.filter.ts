import { Catch, type ExceptionFilter } from '@nestjs/common';
import { GraphQLError } from 'graphql';

@Catch(GraphQLError)
export class GqlExceptionFilter implements ExceptionFilter {
  catch(exception: GraphQLError) {
    throw exception;
  }
}
