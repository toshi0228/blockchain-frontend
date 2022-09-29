import { CryptKey, User, Wallet } from "type/model/type.model.t";

export interface SignUpResponse {
  user: User;
  wallet: Wallet;
  cryptKey: CryptKey;
}

export type LoginResponse = {
  user: User;
  wallet: Wallet;
  cryptKey: CryptKey;
};
