import { AuditAction } from '@prisma/client';

export interface DashboardResponseDto {
  stats: {
    totalCars: number;
    carsAvailable: number;
    carsCreatedLast7Days: number;
    totalInquiries: number;
    unhandledInquiries: number;
  };

  lastActions: {
    adminId: string;
    action: AuditAction;
    createdAt: string;
  }[];
}
