import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "apis";
import { GetUserResponse } from "interfaces";
import { Card, Container, InputContainer } from "./style";

export interface ITopProps {}

const Top: React.FC<ITopProps> = (props) => {
  const navigate = useNavigate();
  const [getUserRes, setGetUserRes] = useState<GetUserResponse>();
  const [recipient, setRecipient] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    init().then((r) => "ローディング完了");
  }, []);

  const init = async () => {
    await api.user.getList().then((res) => {
      setGetUserRes(res.data);
    });
  };

  const submit = () => {
    console.log("送信処理");
  };

  return (
    <Container>
      <main>
        <h2>トップ画面</h2>
      </main>

      <InputContainer>
        <div>
          <div>送信先</div>
          <input name="recipient" />
        </div>
        <div>
          <div>送金額</div>
          <input name="amount" />
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
