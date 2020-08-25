import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateUserResponse, GetUserResponse } from "@service/proto-schema";
import { UserMutation, CreateUserResponseType, RegisterInput, FindUserInput, GetUserResponseType } from "./types";
import { UserService } from "./user.service";

@Resolver(() => UserMutation)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(returns => CreateUserResponseType)
  async createUser(@Args('input') data: RegisterInput):Promise<CreateUserResponse> {
    const user = await this.userService.createUser(data)
    return user
  }

  @Query(returns => GetUserResponseType )
  async getUser(@Args('input') data:FindUserInput):Promise<GetUserResponse>{
    const user = await this.userService.getUser(data)
    return user
  }


}