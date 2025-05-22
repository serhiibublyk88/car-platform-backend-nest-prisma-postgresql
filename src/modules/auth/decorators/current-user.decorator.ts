import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface JwtPayload {
  id: string;
  email: string;
  role: 'ADMIN';
}

type ReqWithUser = Request & { user?: JwtPayload };

export const CurrentUser = createParamDecorator<
  keyof JwtPayload | undefined,
  ExecutionContext,
  string | JwtPayload | undefined
>((data, ctx) => {
  const request = ctx.switchToHttp().getRequest<ReqWithUser>();
  const user = request.user;

  if (!user) return undefined;
  return data ? user[data] : user;
});
