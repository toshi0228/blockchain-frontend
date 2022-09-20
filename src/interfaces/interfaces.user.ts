import { User } from "types/model/types.model.t";

export type GetUserResponse = {
  users: User[];
};

export interface LoginUserRequest {
  name: string;
  password: string;
}

export type LoginUserResponse = User;

export interface GetUserByIdResponse {}

export interface CreateUserResponse {}

export interface CreateUserRequest {}

export interface UpdateUserResponse {}

export interface UpdateUserRequest {}

export interface DeleteUserByIdResponse {}
