import { IsString, IsEmail } from 'class-validator';
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