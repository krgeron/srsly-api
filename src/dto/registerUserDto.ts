import { IsNotEmpty, IsOptional } from 'class-validator';

export class RegisterUserRequestDTO {
  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  @IsNotEmpty()
  middleName: string;

  @IsOptional()
  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  emailAddress: string;

  @IsOptional()
  @IsNotEmpty()
  birthDate: string;

  @IsOptional()
  @IsNotEmpty()
  gender: string;
}
