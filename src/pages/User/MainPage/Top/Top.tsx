import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import * as apis from "apis";
import { GetUserResponse } from "interfaces";
import { Card, Container, InputContainer } from "./style";
import { User, Wallet } from "entity";

export interface ITopProps {}

const Top: React.FC<ITopProps> = (props) => {
  const [getUserRes, setGetUserRes] = useState<GetUserResponse>();
  const [recipientAddress, setRecipientAddress] = useState<string>();
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    init().then((r) => "ローディング完了");
  }, []);

  const init = async () => {
    await apis.user.getList().then((res) => {
      setGetUserRes(res.data);
    });
  };

  const inputAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const submit = async () => {
    if (!recipientAddress || amount === 0) return;

    await apis.transaction
      .create({
        recipientAddress: recipientAddress,
        senderAddress: Wallet.address,
        amount: amount,
        privateKey: User.privateKey,
        publicKey: User.publicKey,
      })

      .then((res) => {
        alert("トランザクション送信に成功");
      })

      .catch((e) => alert("トランザクションの送信失敗"));
  };

  return (
    <Container>
      <main>
        <h2>トップ画面</h2>
      </main>

      <InputContainer>
        <div>
          <div>送信先</div>
          <input name="recipientAddress" onChange={(e) => setRecipientAddress(e.target.value)} />
        </div>
        <div>
          <div>送金額</div>
          <input name="amount" onChange={(e) => inputAmount(e)} />
        </div>

        <button onClick={() => submit()}>送金</button>
      </InputContainer>

      <div>ユーザーの一覧</div>
      {getUserRes?.users?.map((item) => (
        <Card>
          <div>{`ユーザーのID： ${item.user?.id}`}</div>
          <div>{`名前： ${item.user?.name}`}</div>
          <div>{`ウォレットアドレス： ${item?.wallet.address}`}</div>
        </Card>
      ))}
    </Container>
  );
};

export default Top;
