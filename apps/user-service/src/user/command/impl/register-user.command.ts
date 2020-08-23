import { ICommand } from '@nestjs/cqrs';
import { CreateUserDto } from '../../dto/user.dto';

export class RegisterUserCommand implements ICommand {
  constructor(public readonly createUserDto: CreateUserDto) {}
}
