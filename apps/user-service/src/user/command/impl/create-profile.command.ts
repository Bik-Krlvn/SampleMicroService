import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '../../entity/user.entity';

export class CreateProfileCommand implements ICommand {
  constructor(public readonly userEntity:UserEntity) {}
}
