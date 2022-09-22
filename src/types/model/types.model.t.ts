export {};

// ユーザー
export interface User {
  id: number;
  name: string;
  updatedAt: Date;
  createdAt: Date;
}

// サイフ
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
