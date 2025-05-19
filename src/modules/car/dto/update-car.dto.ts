import {
  IsString,
  IsInt,
  IsEnum,
  IsBoolean,
  IsOptional,
  IsArray,
  Min,
  Max,
  Matches,
} from 'class-validator';
import {
  VehicleType,
  Condition,
  FuelType,
  Drivetrain,
  Transmission,
} from './create-car.dto';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  make?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsEnum(VehicleType)
  vehicleType?: VehicleType;

  @IsOptional()
  @IsInt()
  @Min(2)
  @Max(7)
  seats?: number;

  @IsOptional()
  @IsInt()
  @Min(2)
  @Max(5)
  doors?: number;

  @IsOptional()
  @IsEnum(Condition)
  condition?: Condition;

  @IsOptional()
  @IsInt()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[0-2])$/, {
    message: 'Format muss YYYY-MM sein',
  })
  firstRegistration?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  mileage?: number;

  @IsOptional()
  @IsEnum(FuelType)
  fuelType?: FuelType;

  @IsOptional()
  @IsInt()
  @Min(0)
  power?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  engineCapacity?: number;

  @IsOptional()
  @IsEnum(Drivetrain)
  drivetrain?: Drivetrain;

  @IsOptional()
  @IsEnum(Transmission)
  transmission?: Transmission;

  @IsOptional()
  @IsString()
  vin?: string;

  @IsOptional()
  @IsBoolean()
  accidentFree?: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsBoolean()
  sold?: boolean;

  @IsOptional()
  @IsBoolean()
  visible?: boolean;
}
