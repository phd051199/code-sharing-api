import { type FastifyReply, type FastifyRequest } from 'fastify';
import _ from 'lodash';

export const fastifyPassportAdditionalHook = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void,
) => {
  _.set(reply, 'setHeader', function (key: string, value: string) {
    return this.raw.setHeader(key, value);
  });
  _.set(reply, 'end', function () {
    return this.raw.end();
  });
  _.set(request, 'res', reply);
  done();
};
