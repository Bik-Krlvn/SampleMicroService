export interface UserInterface {
  name: string;

  username: string;

  email: string;

  password: string;
}

export interface CreateUserResponse {
  accessToken: string;
}

export interface GetUserResponse {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  verificationCode: string;
}
