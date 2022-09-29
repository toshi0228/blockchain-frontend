import * as React from "react";
import { useState } from "react";
import * as api from "api";
import { User, Wallet } from "entity";
import { LoginResponse } from "api/authApi";
import { Container } from "./style";

export interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setLoginUser] = useState<LoginResponse>();

  const submit = async () => {
    await api.auth
      .login({ name, password })
      .then((res) => {
        setLoginUser(res.data);

        new Wallet(res.data.wallet.address);
        new User(res.data.user.name, res.data.cryptKey.privateKey, res.data.cryptKey.publicKey);

        alert(` ${name}さんログイン成功です`);
        window.location.reload();
      })
      .catch(() => alert(` ${name}さんログイン失敗です`));
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
