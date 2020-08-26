import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType('CreateUserResponse')
export class CreateUserResponseType {
    @Field()
    accessToken: string
}

@ObjectType()
export class UserMutation { }

@ObjectType('GetUserResponse')
export class GetUserResponseType {
    @Field()
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    verified: boolean;

    @Field()
    verificationCode: string;
}

@ObjectType('LoginResponse')
export class LoginResponseType {
    @Field()
    accessToken: string
}