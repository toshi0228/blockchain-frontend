import { User, Wallet } from "types/model/types.model.t";

export type GetUserResponse = {
  users: {
    id: number;
    name: string;
    updatedAt: Date;
    createdAt: Date;
    wallet: Wallet;
  }[];
};

export interface GetUserByIdResponse {}

export interface CreateUserResponse {}

export interface CreateUserRequest {}

export interface UpdateUserResponse {}

export interface UpdateUserRequest {}

export interface DeleteUserByIdResponse {}
