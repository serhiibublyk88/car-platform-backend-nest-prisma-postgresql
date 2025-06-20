import { PrismaService } from '@/database/database.service';
import { Injectable } from '@nestjs/common';
import { DashboardResponseDto } from './dto/dashboard-response.dto';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<DashboardResponseDto> {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const [
      totalCars,
      carsAvailable,
      carsCreatedLast7Days,
      totalInquiries,
      unhandledInquiries,
      lastActionsRaw,
    ] = await this.prisma.$transaction([
      this.prisma.car.count(),
      this.prisma.car.count({ where: { visible: true } }),
      this.prisma.car.count({ where: { createdAt: { gte: weekAgo } } }),
      this.prisma.inquiry.count(),
      this.prisma.inquiry.count({ where: { isHandled: false } }),
      this.prisma.auditLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20,
        select: { adminId: true, action: true, createdAt: true },
      }),
    ]);

    const lastActions = lastActionsRaw.map((a) => ({
      ...a,
      createdAt: a.createdAt.toISOString(),
    }));

    return {
      stats: {
        totalCars,
        carsAvailable,
        carsCreatedLast7Days,
        totalInquiries,
        unhandledInquiries,
      },
      lastActions,
    };
  }
}
