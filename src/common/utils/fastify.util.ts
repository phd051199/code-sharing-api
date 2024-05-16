import { type FastifyReply, type FastifyRequest } from 'fastify';
import { set } from 'lodash';

export const fastifyOnRequestHook = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void,
) => {
  set(reply, 'setHeader', function (key: string, value: string) {
    return this.raw.setHeader(key, value);
  });
  set(reply, 'end', function () {
    return this.raw.end();
  });
  set(request, 'res', reply);
  done();
};
