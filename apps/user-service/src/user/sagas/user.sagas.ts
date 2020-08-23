import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { UserRegisteredEvent } from '../event/impl/user-registered.event';
import { CreateProfileCommand } from '../command/impl/create-profile.command';

@Injectable()
export class UserSagas {
  logger = new Logger(this.constructor.name);

  @Saga()
  userCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserRegisteredEvent),
      delay(1000),
      map(event => {
        this.logger.log(event, 'Inside [UserSagas] Saga');
        return new CreateProfileCommand(event.userEntity)
      }),
    );
  };
}
