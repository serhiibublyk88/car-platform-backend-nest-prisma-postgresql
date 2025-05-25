import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/database';
import { CreateInquiryDto, FilterInquiryDto } from './dto';
import { Inquiry, AuditAction } from '@prisma/client';
import { AuditService } from '@/modules/audit';

@Injectable()
export class InquiryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async createPublicInquiry(
    carId: string,
    dto: CreateInquiryDto,
  ): Promise<Inquiry> {
    const car = await this.prisma.car.findFirst({
      where: {
        id: carId,
        visible: true,
      },
    });

    if (!car) {
      throw new NotFoundException('Auto nicht gefunden oder nicht verfügbar');
    }

    return this.prisma.inquiry.create({
      data: {
        carId,
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        message: dto.message,
      },
    });
  }

  async getAll(filter: FilterInquiryDto): Promise<Inquiry[]> {
    const { carId, isHandled, isRead } = filter;

    return this.prisma.inquiry.findMany({
      where: {
        carId,
        isHandled,
        isRead,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        car: {
          select: { make: true, model: true },
        },
      },
    });
  }

  async markAsRead(id: string, adminId: string): Promise<Inquiry> {
    await this.ensureExists(id);

    const updated = await this.prisma.inquiry.update({
      where: { id },
      data: { isRead: true },
    });

    await this.audit.log(adminId, AuditAction.MarkInquiryRead as AuditAction);
    return updated;
  }

  async markAsHandled(id: string, adminId: string): Promise<Inquiry> {
    await this.ensureExists(id);

    const updated = await this.prisma.inquiry.update({
      where: { id },
      data: { isHandled: true },
    });

    await this.audit.log(adminId, AuditAction.HandleInquiry as AuditAction);
    return updated;
  }

  async delete(id: string, adminId: string): Promise<Inquiry> {
    await this.ensureExists(id);

    const deleted = await this.prisma.inquiry.delete({
      where: { id },
    });

    await this.audit.log(adminId, AuditAction.DeleteInquiry as AuditAction);
    return deleted;
  }

  private async ensureExists(id: string): Promise<Inquiry> {
    const inquiry = await this.prisma.inquiry.findUnique({
      where: { id },
    });

    if (!inquiry) {
      throw new NotFoundException('Anfrage nicht gefunden');
    }

    return inquiry;
  }
}
