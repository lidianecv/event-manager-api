import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UserRole } from "./user-role.enum";


export class CreateUserDto {
    @IsNumber()
    id: number;

@IsString()
    name: string;

@IsString()
@IsEmail()
@IsNotEmpty()
    email: string;

//PASSWORD
@IsString()
@IsNotEmpty()
    password: string;

// ('user' | 'admin')

@IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
@IsDateString()
    createdAt: Date;
}
   



