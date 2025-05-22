import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
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
    const throttlerPassed = await this.throttlerGuard.canActivate(context);
    if (!throttlerPassed) return false;

    const jwtPassed = await this.jwtAuthGuard.canActivate(context);
    if (!jwtPassed) return false;

    const rolesPassed = this.rolesGuard.canActivate(context);
    return rolesPassed;
  }
}
