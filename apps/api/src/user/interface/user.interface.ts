import { CreateUserDto, CreateUserResponse, FindCurrentUserRequest, GetUserResponse, LoginRequest, LoginResponse } from "@service/proto-schema";
import { Observable } from "rxjs";

export interface IUserService {
    createUser(data: CreateUserDto): Observable<CreateUserResponse>
    getUser(data: FindCurrentUserRequest): Observable<GetUserResponse>
    loginUser(data: LoginRequest): Observable<LoginResponse>
}