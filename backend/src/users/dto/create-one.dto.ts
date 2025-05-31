import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateOneDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
