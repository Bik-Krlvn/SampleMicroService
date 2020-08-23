import { IEvent } from '@nestjs/cqrs';
import { UserEntity } from '../../entity/user.entity';

export class UserRegisteredEvent implements IEvent {
  constructor(public readonly userEntity: UserEntity) {}
}
