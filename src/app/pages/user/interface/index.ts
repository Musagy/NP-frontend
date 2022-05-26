
export interface AccountLogin {
  usernameOrEmail: string;
  password: string;
}
export interface AccountLogup {
  name: string;
  username: string;
  email: string;
  password: string;
}
export interface Token {
  token: string;
}