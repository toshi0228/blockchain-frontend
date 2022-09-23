import { Transaction } from "types/model/types.model.t";

export type GetTransactionResponse = {}[];

export interface GetTransactionByIdResponse {}

export type CreateTransactionResponse = Transaction;

export type CreateTransactionRequest = {
  senderAddress: string;
  recipientAddress: string;
  amount: number;
  privateKey: string;
  publicKey: string;
};
