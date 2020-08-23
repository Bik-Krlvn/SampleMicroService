import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { ProfileCreatedEvent } from '../impl/profile-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(ProfileCreatedEvent)
export class ProfileCreatedHandler
  implements IEventHandler<ProfileCreatedEvent> {
  logger = new Logger(this.constructor.name);

  handle(event: ProfileCreatedEvent): any {
    this.logger.log(event, event.constructor.name);
  }
}
