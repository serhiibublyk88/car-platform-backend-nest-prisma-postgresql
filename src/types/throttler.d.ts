import '@nestjs/throttler';

declare module '@nestjs/throttler' {
  export interface ThrottlerMethodOrControllerOptions {
    limit?: number;
    ttl?: number;
    blockDuration?: number;
    [key: string]: unknown;
  }

  export function Throttle(
    options: ThrottlerMethodOrControllerOptions,
  ): MethodDecorator & ClassDecorator;
}
