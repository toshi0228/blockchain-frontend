import { User, Wallet, CryptKey } from "../types/model/types.model.t";

export interface SignUpRequest {
  name: string;
  password: string;
}

export interface SignUpResponse {
  user: User;
  wallet: Wallet;
  cryptKey: CryptKey;
}

export interface LoginRequest {
  name: string;
  password: string;
}

export type LoginResponse = {
  user: User;
  wallet: Wallet;
  cryptKey: CryptKey;
};
