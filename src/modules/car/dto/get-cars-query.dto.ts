import { IsInt, IsOptional, IsString, IsBoolean, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCarsQueryDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  make?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  fuelType?: string;

  @IsOptional()
  @IsString()
  transmission?: string;

  @IsOptional()
  @IsString()
  vehicleType?: string;

  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  accidentFree?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  seats?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  doors?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  priceFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  priceTo?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  mileageFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  mileageTo?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  powerFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  powerTo?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  engineCapacityFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  engineCapacityTo?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  yearFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  yearTo?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;
}
