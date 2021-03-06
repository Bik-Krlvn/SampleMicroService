/* eslint-disable */
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  verified: boolean;
  verificationCode: string;
}

export interface LoginResponse {
  user: User | undefined;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface CreateUserDto {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface GetUserResponse {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  verificationCode: string;
}

export interface FindCurrentUserRequest {
  userId: string;
}

export interface CreateUserResponse {
  accessToken: string;
}

const baseUser: object = {
  id: '',
  name: '',
  username: '',
  email: '',
  verified: false,
  verificationCode: '',
};

const baseLoginResponse: object = {
  user: undefined,
};

const baseLoginRequest: object = {
  username: '',
  password: '',
};

const baseCreateUserDto: object = {
  name: '',
  username: '',
  email: '',
  password: '',
};

const baseGetUserResponse: object = {
  id: '',
  username: '',
  email: '',
  verified: false,
  verificationCode: '',
};

const baseFindCurrentUserRequest: object = {
  userId: '',
};

const baseCreateUserResponse: object = {
  accessToken: '',
};

export interface UserService<Context extends DataLoaders> {

  createUser(request: CreateUserDto, ctx: Context): Promise<CreateUserResponse>;

  getUser(request: FindCurrentUserRequest, ctx: Context): Promise<GetUserResponse>;

  loginUser(request: LoginRequest, ctx: Context): Promise<LoginResponse>;

}

export interface UserServiceClient<Context extends DataLoaders> {

  createUser(request: CreateUserDto, ctx?: Context): Observable<CreateUserResponse>;

  getUser(request: FindCurrentUserRequest, ctx?: Context): Observable<GetUserResponse>;

  loginUser(request: LoginRequest, ctx?: Context): Observable<LoginResponse>;

}

interface DataLoaders {

  getDataLoader<T>(identifier: string, constructorFn: () => T): T;

}

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.username);
    writer.uint32(34).string(message.email);
    writer.uint32(40).bool(message.verified);
    writer.uint32(50).string(message.verificationCode);
    return writer;
  },
  decode(reader: Reader, length?: number): User {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUser) as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.username = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.verified = reader.bool();
          break;
        case 6:
          message.verificationCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): User {
    const message = Object.create(baseUser) as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = '';
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = Boolean(object.verified);
    } else {
      message.verified = false;
    }
    if (object.verificationCode !== undefined && object.verificationCode !== null) {
      message.verificationCode = String(object.verificationCode);
    } else {
      message.verificationCode = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = Object.create(baseUser) as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = '';
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    } else {
      message.verified = false;
    }
    if (object.verificationCode !== undefined && object.verificationCode !== null) {
      message.verificationCode = object.verificationCode;
    } else {
      message.verificationCode = '';
    }
    return message;
  },
  toJSON(message: User): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.name = message.name || '';
    obj.username = message.username || '';
    obj.email = message.email || '';
    obj.verified = message.verified || false;
    obj.verificationCode = message.verificationCode || '';
    return obj;
  },
};

export const LoginResponse = {
  encode(message: LoginResponse, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): LoginResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseLoginResponse) as LoginResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LoginResponse {
    const message = Object.create(baseLoginResponse) as LoginResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<LoginResponse>): LoginResponse {
    const message = Object.create(baseLoginResponse) as LoginResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    return obj;
  },
};

export const LoginRequest = {
  encode(message: LoginRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.username);
    writer.uint32(18).string(message.password);
    return writer;
  },
  decode(reader: Reader, length?: number): LoginRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseLoginRequest) as LoginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LoginRequest {
    const message = Object.create(baseLoginRequest) as LoginRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = '';
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = Object.create(baseLoginRequest) as LoginRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = '';
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = '';
    }
    return message;
  },
  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    obj.username = message.username || '';
    obj.password = message.password || '';
    return obj;
  },
};

export const CreateUserDto = {
  encode(message: CreateUserDto, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.username);
    writer.uint32(26).string(message.email);
    writer.uint32(34).string(message.password);
    return writer;
  },
  decode(reader: Reader, length?: number): CreateUserDto {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreateUserDto) as CreateUserDto;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateUserDto {
    const message = Object.create(baseCreateUserDto) as CreateUserDto;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = '';
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateUserDto>): CreateUserDto {
    const message = Object.create(baseCreateUserDto) as CreateUserDto;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = '';
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = '';
    }
    return message;
  },
  toJSON(message: CreateUserDto): unknown {
    const obj: any = {};
    obj.name = message.name || '';
    obj.username = message.username || '';
    obj.email = message.email || '';
    obj.password = message.password || '';
    return obj;
  },
};

export const GetUserResponse = {
  encode(message: GetUserResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.username);
    writer.uint32(26).string(message.email);
    writer.uint32(32).bool(message.verified);
    writer.uint32(42).string(message.verificationCode);
    return writer;
  },
  decode(reader: Reader, length?: number): GetUserResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseGetUserResponse) as GetUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.verified = reader.bool();
          break;
        case 5:
          message.verificationCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetUserResponse {
    const message = Object.create(baseGetUserResponse) as GetUserResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = '';
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = Boolean(object.verified);
    } else {
      message.verified = false;
    }
    if (object.verificationCode !== undefined && object.verificationCode !== null) {
      message.verificationCode = String(object.verificationCode);
    } else {
      message.verificationCode = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetUserResponse>): GetUserResponse {
    const message = Object.create(baseGetUserResponse) as GetUserResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = '';
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    } else {
      message.verified = false;
    }
    if (object.verificationCode !== undefined && object.verificationCode !== null) {
      message.verificationCode = object.verificationCode;
    } else {
      message.verificationCode = '';
    }
    return message;
  },
  toJSON(message: GetUserResponse): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.username = message.username || '';
    obj.email = message.email || '';
    obj.verified = message.verified || false;
    obj.verificationCode = message.verificationCode || '';
    return obj;
  },
};

export const FindCurrentUserRequest = {
  encode(message: FindCurrentUserRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.userId);
    return writer;
  },
  decode(reader: Reader, length?: number): FindCurrentUserRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseFindCurrentUserRequest) as FindCurrentUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FindCurrentUserRequest {
    const message = Object.create(baseFindCurrentUserRequest) as FindCurrentUserRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindCurrentUserRequest>): FindCurrentUserRequest {
    const message = Object.create(baseFindCurrentUserRequest) as FindCurrentUserRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = '';
    }
    return message;
  },
  toJSON(message: FindCurrentUserRequest): unknown {
    const obj: any = {};
    obj.userId = message.userId || '';
    return obj;
  },
};

export const CreateUserResponse = {
  encode(message: CreateUserResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.accessToken);
    return writer;
  },
  decode(reader: Reader, length?: number): CreateUserResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreateUserResponse) as CreateUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateUserResponse {
    const message = Object.create(baseCreateUserResponse) as CreateUserResponse;
    if (object.accessToken !== undefined && object.accessToken !== null) {
      message.accessToken = String(object.accessToken);
    } else {
      message.accessToken = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateUserResponse>): CreateUserResponse {
    const message = Object.create(baseCreateUserResponse) as CreateUserResponse;
    if (object.accessToken !== undefined && object.accessToken !== null) {
      message.accessToken = object.accessToken;
    } else {
      message.accessToken = '';
    }
    return message;
  },
  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    obj.accessToken = message.accessToken || '';
    return obj;
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T[P] extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T[P] extends Date | Function | Uint8Array | undefined
  ? T[P]
  : T[P] extends infer U | undefined
  ? DeepPartial<U>
  : T[P] extends object
  ? DeepPartial<T[P]>
  : T[P]
};