export {};

// ユーザー
export interface User {
  id: number;
  name: string;
  updatedAt: Date;
  createdAt: Date;
}

// ウォレット
export interface Wallet {
  iD: number;
  userID: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

// 鍵
export interface CryptKey {
  privateKey: string;
  publicKey: string;
}

export type Transaction = {
  id: number;
  senderAddress: string;
  recipientAddress: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};
