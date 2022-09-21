import * as React from "react";
import * as api from "apis";
import { Container } from "./style";
import { useState } from "react";
import { User, Wallet } from "entity";

export interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = async () => {
    await api.user
      .login({ name, password })
      .then((res) => {
        new Wallet(res.data.wallet.blockchainAddress.toString());
        new User(res.data.name);
        alert(` ${User.userName}さんログイン成功です`);
        window.location.reload();
      })
      .catch((res) => alert(` ${User.userName}さんログイン失敗です`));
  };

  return (
    <Container>
      <h2>ログインページ</h2>

      <div>
        <div>名前</div>
        <input name="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <div>パスワード</div>
        <input name="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={() => submit()}>ログイン</button>
    </Container>
  );
};

export default Login;
