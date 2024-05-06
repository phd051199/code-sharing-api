export interface MinioClientOptions {
  readonly endPoint: string;
  readonly port: number;
  readonly accessKey: string;
  readonly secretKey: string;
  readonly useSSL?: boolean;
}
