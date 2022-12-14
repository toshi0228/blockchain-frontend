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

// ブロック
export type Block = {
  id: number;
  nonce: number;
  transactions: string;
  previousHash: string;
  timestamp: number;
  hash: string;
};

// 鍵
export interface CryptKey {
  privateKey: string;
  publicKey: string;
}

// トランザクション
export type Transaction = {
  id: number;
  senderAddress: string;
  recipientAddress: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

// トランザクションプール
export type TransactionPool = {
  id: number;
  senderAddress: string;
  recipientAddress: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};
