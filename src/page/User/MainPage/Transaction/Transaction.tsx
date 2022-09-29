import * as React from "react";
import { useEffect, useState } from "react";
import { GetTransactionResponse } from "api/transactionApi";
import * as api from "api";

import { Container, TxContainer } from "./style";

export interface ITransactionProps {}

const Transaction: React.FC<ITransactionProps> = (props) => {
  const [getTxRes, setGetTxRes] = useState<GetTransactionResponse>();
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log("init");
    api.transaction
      .getList()
      .then((res) => {
        debugger;
        setGetTxRes(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      トランザクション
      {getTxRes?.transactions?.map((tx, i) => (
        <TxContainer key={i.toString()}>
          <div>{`トランザクションID: ${tx.id}`}</div>
          <div>{`送信者のアドレス: ${tx.senderAddress}`}</div>
          <div>{`受信者のアドレス: ${tx.recipientAddress}`}</div>
          <div>{`送金額: ${tx.amount}`}</div>
          <div>{`作成時間: ${tx.createdAt}`}</div>
        </TxContainer>
      ))}
    </Container>
  );
};

export default Transaction;
