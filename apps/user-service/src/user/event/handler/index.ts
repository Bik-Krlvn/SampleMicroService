import { UserRegisteredHandler } from './user-registered.handler';
import { ProfileCreatedHandler } from './profile-created.handler';
import { UserLoggedInHandler } from './user-loggedin.handler';

export const EventHandlers = [
    UserLoggedInHandler,
    UserRegisteredHandler,
    ProfileCreatedHandler
];
