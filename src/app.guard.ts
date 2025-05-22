import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Request } from 'express';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from './modules/auth/guards/roles.guard';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private readonly throttlerGuard: ThrottlerGuard,
    private readonly jwtAuthGuard: JwtAuthGuard,
    private readonly rolesGuard: RolesGuard,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    const isPublicAuthRoute =
      req.method === 'POST' &&
      ['/auth/login', '/auth/logout'].includes(req.path);

    if (isPublicAuthRoute) {
      return true;
    }

    const throttlerPassed = await this.throttlerGuard.canActivate(context);
    if (!throttlerPassed) return false;

    const jwtPassed = await this.jwtAuthGuard.canActivate(context);
    if (!jwtPassed) return false;

    const rolesPassed = this.rolesGuard.canActivate(context);
    return rolesPassed;
  }
}
