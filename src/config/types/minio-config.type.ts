export type MinioOptions = {
  readonly endPoint: string;
  readonly port: number;
  readonly accessKey: string;
  readonly secretKey: string;
  readonly useSSL?: boolean;
};
