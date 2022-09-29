import { User, Wallet } from "type/model/type.model.t";

export type GetUserResponse = {
  users: { user: User; wallet: Wallet }[];
};

export type GetUserByIdResponse = {};

export type CreateUserResponse = {};

export type UpdateUserResponse = {};

export type DeleteUserByIdResponse = {};
