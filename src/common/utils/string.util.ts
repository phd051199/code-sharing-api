import { type Readable } from 'stream';

export function streamToString(stream: Readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => {
      chunks.push(chunk);
    });
    stream.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });
    stream.on('error', (err) => {
      reject(err);
    });
  });
}
