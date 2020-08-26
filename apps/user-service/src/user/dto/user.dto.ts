import { IsString, IsEmail, IsUUID } from 'class-validator';
import { UserInterface } from '../interface/user.interface';

export class CreateUserDto implements UserInterface {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class FindUserDto {
  @IsUUID('4')
  userId: string
}


export class LoginUserDto {
  @IsString()
  username: string

  @IsString()
  password: string
}