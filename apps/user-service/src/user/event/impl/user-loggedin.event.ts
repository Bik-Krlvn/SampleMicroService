import { IEvent } from "@nestjs/cqrs";
import { UserEntity } from "../../entity/user.entity";

export class UserLoggedInEvent implements IEvent {
    constructor(public readonly userEntity: UserEntity) { }
}