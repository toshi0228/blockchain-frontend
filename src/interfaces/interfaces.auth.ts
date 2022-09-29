import { User, Wallet, CryptKey } from "../type/model/type.model.t";

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
