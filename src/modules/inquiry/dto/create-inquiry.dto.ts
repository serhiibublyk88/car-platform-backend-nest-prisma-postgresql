import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateInquiryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'Der Name muss mindestens 2 Zeichen enthalten.' })
  @MaxLength(100, { message: 'Der Name darf maximal 100 Zeichen enthalten.' })
  name!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(20, {
    message: 'Die Telefonnummer darf maximal 20 Zeichen enthalten.',
  })
  @Matches(/^\+49\d{10,14}$/, {
    message: 'Die Telefonnummer muss dem Format +4912345678901 entsprechen.',
  })
  phone?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000, {
    message: 'Die Nachricht darf maximal 1000 Zeichen enthalten.',
  })
  message!: string;
}
