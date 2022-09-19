export {};

export interface User {
  id: number;
  name: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface Wallet {
  iD: number;
  userID: number;
  blockchainAddress: number;
  createdAt: Date;
  updatedAt: Date;
}
