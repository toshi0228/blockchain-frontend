import * as React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "config";
import { useEffect, useState } from "react";
import * as api from "apis";
import { GetUserResponse } from "interfaces";
import { Container, Card } from "./style";

export interface ITopProps {}

const Top: React.FC<ITopProps> = (props) => {
  const navigate = useNavigate();
  const [getUserRes, setGetUserRes] = useState<GetUserResponse>();

  useEffect(() => {
    init().then((r) => "ローディング完了");
  }, []);

  const init = async () => {
    const res = await api.user.getList();
    setGetUserRes(res.data);
  };

  return (
    <Container>
      <main>
        <h2>トップ画面</h2>
      </main>

      <div>ユーザーの一覧</div>
      {getUserRes?.users?.map((user) => (
        <Card>
          <div>{`ユーザーのID： ${user?.id}`}</div>
          <div>{`名前： ${user?.name}`}</div>
          <div>{`ウォレットアドレス： ${user?.wallet.blockchainAddress}`}</div>
        </Card>
      ))}
    </Container>
  );
};

export default Top;
