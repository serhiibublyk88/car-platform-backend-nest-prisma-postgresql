import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export enum VehicleType {
  Unselected = 'Unselected',
  Cabrio_Roadster = 'Cabrio_Roadster',
  Kleinwagen = 'Kleinwagen',
  Limousine = 'Limousine',
  Van_Minibus = 'Van_Minibus',
  Gelaendewagen_Pickup_SUV = 'Gelaendewagen_Pickup_SUV',
  Kombi = 'Kombi',
  Sportwagen_Coupe = 'Sportwagen_Coupe',
  Andere = 'Andere',
}

export enum Condition {
  Unselected = 'Unselected',
  Neu = 'Neu',
  Gebraucht = 'Gebraucht',
  Jahreswagen = 'Jahreswagen',
  Oldtimer = 'Oldtimer',
  Vorfuehrfahrzeug = 'Vorfuehrfahrzeug',
}

export enum FuelType {
  Unselected = 'Unselected',
  Benzin = 'Benzin',
  Diesel = 'Diesel',
  Elektro = 'Elektro',
  Ethanol = 'Ethanol',
  Hybrid_Diesel_Elektro = 'Hybrid_Diesel_Elektro',
  Hybrid_Benzin_Elektro = 'Hybrid_Benzin_Elektro',
  Plug_in_Hybrid = 'Plug_in_Hybrid',
  Wasserstoff = 'Wasserstoff',
  Autogas_LPG = 'Autogas_LPG',
  Erdgas_CNG = 'Erdgas_CNG',
  Andere = 'Andere',
}

export enum Drivetrain {
  Unselected = 'Unselected',
  Frontantrieb = 'Frontantrieb',
  Heckantrieb = 'Heckantrieb',
  Allrad = 'Allrad',
}

export enum Transmission {
  Unselected = 'Unselected',
  Automatik = 'Automatik',
  Halbautomatik = 'Halbautomatik',
  Schaltgetriebe = 'Schaltgetriebe',
}

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsEnum(VehicleType)
  vehicleType: VehicleType;

  @IsInt()
  @Min(2)
  @Max(7)
  seats: number;

  @IsInt()
  @Min(2)
  @Max(5)
  doors: number;

  @IsEnum(Condition)
  condition: Condition;

  @IsInt()
  @Min(0)
  price: number;

  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[0-2])$/, {
    message: 'Format muss YYYY-MM sein',
  })
  firstRegistration: string;

  @IsInt()
  @Min(0)
  mileage: number;

  @IsEnum(FuelType)
  fuelType: FuelType;

  @IsInt()
  @Min(0)
  power: number;

  @IsInt()
  @Min(0)
  engineCapacity: number;

  @IsEnum(Drivetrain)
  drivetrain: Drivetrain;

  @IsEnum(Transmission)
  transmission: Transmission;

  @IsString()
  vin: string;

  @IsBoolean()
  accidentFree: boolean;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  images: string[]; // массив URL строк, позже заменим на upload
}
