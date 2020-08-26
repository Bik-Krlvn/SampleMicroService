import { Mutation, Args } from "@nestjs/graphql";
import { LoginInput, LoginResponseType } from "../user/types";
import { AuthService } from "./auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @Mutation(returns => LoginResponseType)
    async login(@Args('credentials') data: LoginInput): Promise<LoginResponseType> {
        const accessToken = await this.authService.loginUser(data)
        return { accessToken }
    }
}