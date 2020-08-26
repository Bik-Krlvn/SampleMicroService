import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { UserLoggedInEvent } from "../impl/user-loggedin.event";
import { Logger } from "@nestjs/common";

@EventsHandler(UserLoggedInEvent)
export class UserLoggedInHandler implements IEventHandler<UserLoggedInEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: UserLoggedInEvent): void {
        this.logger.log(event, `${event.constructor.name}`)
    }
}