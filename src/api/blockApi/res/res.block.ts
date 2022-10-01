import { Block } from "type/model/type.model.t";

export type GetBlockResponse = {
  blockChain: Block[];
};

export type GetVerifyBlockResponse = {
  verifyBlockChain: {
    id: number;
    nonce: number;
    transactions: string;
    previousHash: string;
    timestamp: number;
    hash: string;
    isCleanData: boolean;
  }[];
};

export type CreateBlockResponse = {};
