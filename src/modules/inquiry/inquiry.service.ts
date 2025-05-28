import { PrismaService } from '@/database';
import { AuditService } from '@/modules/audit';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AuditAction, Inquiry } from '@prisma/client';
import { CreateInquiryDto, FilterInquiryDto } from './dto';

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
    const { carId, isHandled, isRead, limit, offset } = filter;

    return this.prisma.inquiry.findMany({
      where: {
        ...(carId && { carId }),
        ...(typeof isRead === 'boolean' && { isRead }),
        ...(typeof isHandled === 'boolean' && { isHandled }),
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit ? Number(limit) : undefined,
      skip: offset ? Number(offset) : undefined,
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

    await this.audit.log(adminId, AuditAction.MarkInquiryRead);
    return updated;
  }

  async markAsHandled(id: string, adminId: string): Promise<Inquiry> {
    await this.ensureExists(id);

    const updated = await this.prisma.inquiry.update({
      where: { id },
      data: { isHandled: true },
    });

    await this.audit.log(adminId, AuditAction.HandleInquiry);
    return updated;
  }

  async delete(id: string, adminId: string): Promise<Inquiry> {
    await this.ensureExists(id);

    const deleted = await this.prisma.inquiry.delete({
      where: { id },
    });

    await this.audit.log(adminId, AuditAction.DeleteInquiry);
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
