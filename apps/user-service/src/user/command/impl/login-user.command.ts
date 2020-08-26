import { LoginRequest } from "@service/proto-schema";
import { ICommand } from "@nestjs/cqrs";

export class LoginUserCommand implements ICommand {
    constructor(public readonly cmd: LoginRequest) { }
}