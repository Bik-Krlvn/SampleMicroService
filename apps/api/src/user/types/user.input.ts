import { Field, InputType } from '@nestjs/graphql'
import { IsString, IsEmail } from 'class-validator';

@InputType()
export class RegisterInput {
    @IsString()
    @Field()
    name: string;

    @IsString()
    @Field()
    username: string;

    @IsEmail()
    @Field()
    email: string;

    @IsString()
    @Field()
    password: string;
}

@InputType()
export class FindUserInput {
    @Field()
    userId: string
}

@InputType()
export class LoginInput {
    @Field()
    username: string

    @Field()
    password: string
}