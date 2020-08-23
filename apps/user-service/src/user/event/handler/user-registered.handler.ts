import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserRegisteredEvent } from '../impl/user-registered.event';
import { Logger } from '@nestjs/common';

@EventsHandler(UserRegisteredEvent)
export class UserRegisteredHandler
  implements IEventHandler<UserRegisteredEvent> {
    logger  = new Logger(this.constructor.name)
  handle(event: UserRegisteredEvent): any {
    this.logger.log(event, event.constructor.name);
  }
}
