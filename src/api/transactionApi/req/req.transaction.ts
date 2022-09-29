export type CreateTransactionRequest = {
  senderAddress: string;
  recipientAddress: string;
  amount: number;
  privateKey: string;
  publicKey: string;
  signature: string;
};

export type UpdateTransactionRequest = {};
