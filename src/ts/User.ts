export type User = {
  _id: string;
  username: string;
  password: string;
};

export type UserAfPass = Omit<User, "password">

