import { Injectable, OnModuleInit, Logger, UnauthorizedException, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IUserService } from '../user/interface/user.interface';
import { CLIENT_SERVICE, PROVIDER } from '@service/common/constants';
import { LoginInput } from '../user/types';
import { JwtService } from '@nestjs/jwt';
import { User } from '@service/proto-schema';

@Injectable()
export class AuthService implements OnModuleInit {
    constructor(
        @Inject(PROVIDER.USER_CLIENT)
        private readonly client: ClientGrpc,
        private readonly jwt: JwtService) { }

    private userService: IUserService
    logger = new Logger(this.constructor.name)

    onModuleInit(): void {
        this.userService = this.client.getService<IUserService>(CLIENT_SERVICE.USER_SERVICE)
    }

    async loginUser(input: LoginInput): Promise<string> {
        try {
            const result = await this.userService.loginUser(input).toPromise()
            const token = await this.generateAccessToken(result.user)
            return token
        } catch (err) {
            this.logger.log(err)
            throw new UnauthorizedException(err.message)
        }
    }

    async generateAccessToken(user: User): Promise<string> {
        const { name, email, id } = user
        const payload = { userId: id, name, email, sub: id }
        const token = this.jwt.signAsync(payload, { expiresIn: process.env.JWT_EXPIRE || '1hr' })
        return token
    }
}
