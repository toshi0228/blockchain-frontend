import { User, Wallet } from "type/model/type.model.t";

export type GetUserResponse = {
  users: { user: User; wallet: Wallet }[];
};

export interface GetUserByIdResponse {}

export interface CreateUserResponse {}

export interface CreateUserRequest {}

export interface UpdateUserResponse {}

export interface UpdateUserRequest {}

export interface DeleteUserByIdResponse {}
