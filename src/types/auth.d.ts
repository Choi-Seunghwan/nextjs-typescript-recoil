declare type JwtToken = stirng;

declare type User = {
  nickname: string;
  email: stirng;
};

declare type SignInResult = {
  nickname: string;
  email: string;
  userId: string;
  instantToken: string;
  jwt: JwtToken;
};
