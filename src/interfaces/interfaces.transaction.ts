import { Transaction } from "type/model/type.model.t";

export type GetTransactionResponse = {}[];

export interface GetTransactionByIdResponse {}

export type CreateTransactionResponse = Transaction;

export type CreateTransactionRequest = {
  senderAddress: string;
  recipientAddress: string;
  amount: number;
  privateKey: string;
  publicKey: string;
  signature: string;
};
