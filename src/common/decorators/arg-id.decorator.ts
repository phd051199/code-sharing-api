import { Args, type ArgsOptions, ID } from '@nestjs/graphql';

export type ArgIdOptions = ArgsOptions & {
  isArray?: boolean;
};

export function ArgId(
  argName: string,
  options?: ArgIdOptions,
): ParameterDecorator {
  return (target, key, index) => {
    Args(argName, { ...options, type: () => (options?.isArray ? [ID] : ID) })(
      target,
      key,
      index,
    );
  };
}
