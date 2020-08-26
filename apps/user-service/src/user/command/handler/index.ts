import { RegisterUserHandler } from './register-user.handler';
import { CreateProfileHandler } from './create-profile.handler';
import { LoginUserHandler } from './login-user.handler';

export const CommandHandlers = [
    LoginUserHandler,
    RegisterUserHandler,
    CreateProfileHandler
];
