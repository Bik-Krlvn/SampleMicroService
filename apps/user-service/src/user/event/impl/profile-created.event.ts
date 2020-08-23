import { IEvent } from '@nestjs/cqrs';
import { ProfileEntity } from '../../entity/profile.entity';

export class ProfileCreatedEvent implements IEvent {
  constructor(public readonly profileEntity: ProfileEntity) {}
}
