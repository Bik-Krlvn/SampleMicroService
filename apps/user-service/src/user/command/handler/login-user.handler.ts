import { LoginUserCommand } from "../impl/login-user.command";
import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../../repository/user.repository";
import { Logger } from "@nestjs/common";
import { NotFoundError } from "@service/common/errors";
import { validatePassword } from "@service/common/utils";
import { ValidationError } from "apollo-server-express";
import { User } from "@service/proto-schema";
import { UserLoggedInEvent } from "../../event/impl/user-loggedin.event";
import { RpcException } from "@nestjs/microservices";

@CommandHandler(LoginUserCommand)
export class LoginUserHandler implements ICommandHandler<LoginUserCommand>{
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly event$: EventBus) { }

    logger = new Logger(this.constructor.name)

    async execute(command: LoginUserCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, `${command.constructor.name}`)
            const { cmd } = command
            const user = await this.userRepository.findOne({ where: { username: cmd.username } })
            if (!user) throw new NotFoundError('invalid credentials')
            const isValid = validatePassword(cmd.password, user.password)
            if (!isValid) throw new ValidationError('invalid credentials')

            if (!user.verified) throw new ValidationError('activate your email address')
            this.event$.publish(new UserLoggedInEvent(user))

            return { user: user as User }
        } catch (err) {
            this.logger.log(err.message)
            throw new RpcException(err)

        }

    }
}