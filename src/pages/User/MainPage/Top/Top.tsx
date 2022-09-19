import * as React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "config";
import { Container } from "./style";
import { useEffect, useState } from "react";
import * as api from "apis";
import { GetUserResponse } from "interfaces";

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
        <p>You can do this, I believe in you.</p>
      </main>

      {getUserRes?.users?.map((user) => (
        <>
          <div>{user?.id}</div>
          <div>{user?.name}</div>
          <div>{user?.wallet.blockchainAddress}</div>
        </>
      ))}

      <nav>
        <a onClick={() => navigate(paths.setting)}>About</a>
      </nav>
    </Container>
  );
};

export default Top;
