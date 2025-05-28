import { IsOptional, IsBooleanString, IsNumberString } from 'class-validator';

export class GetInquiriesDto {
  @IsOptional()
  @IsBooleanString()
  isRead?: string;

  @IsOptional()
  @IsBooleanString()
  isHandled?: string;

  @IsOptional()
  @IsNumberString()
  limit?: string;

  @IsOptional()
  @IsNumberString()
  offset?: string;
}
