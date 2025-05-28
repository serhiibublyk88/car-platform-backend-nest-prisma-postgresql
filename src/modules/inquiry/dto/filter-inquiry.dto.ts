import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsUUID, IsInt, Min } from 'class-validator';

export class FilterInquiryDto {
  @IsOptional()
  @IsUUID()
  carId?: string;

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isHandled?: boolean;

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isRead?: boolean;

  @IsOptional()
  @Transform(({ value }) => parseInt(String(value), 10))
  @IsInt()
  @Min(1)
  limit?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(String(value), 10))
  @IsInt()
  @Min(0)
  offset?: number;
}
