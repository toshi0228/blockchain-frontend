import * as React from "react";

import { useEffect, useState } from "react";
import * as api from "api";
import { GetTransactionPoolResponse } from "api/transactionPoolApi";
import { Container, TxPoolContainer } from "./style";

export interface ITransactionPoolProps {}

const TransactionPool: React.FC<ITransactionPoolProps> = (props) => {
  const [getTxPoolRes, setGetTxPoolRes] = useState<GetTransactionPoolResponse>();
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    api.transactionPool
      .getList()
      .then((res) => {
        setGetTxPoolRes(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <Container>
      トランザクションプール
      {getTxPoolRes?.transactionPool?.map((tx, i) => (
        <TxPoolContainer key={i.toString()}>
          <div>{`トランザクションID: ${tx.id}`}</div>
          <div>{`送信者のアドレス: ${tx.senderAddress}`}</div>
          <div>{`受信者のアドレス: ${tx.recipientAddress}`}</div>
          <div>{`送金額: ${tx.amount}`}</div>
          <div>{`作成時間: ${tx.createdAt}`}</div>
        </TxPoolContainer>
      ))}
    </Container>
  );
};

export default TransactionPool;
