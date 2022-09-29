import * as React from "react";
import { useState } from "react";
import * as api from "api";
import { SignUpResponse } from "api/authApi";
import { Container } from "./style";
import { User, Wallet } from "entity";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setSignUpUser] = useState<SignUpResponse>();

  const submit = async () => {
    await api.auth
      .signUp({ name, password })
      .then((res) => {
        setSignUpUser(res.data);

        new Wallet(res.data.wallet.address);
        new User(res.data.user.name, res.data.cryptKey.privateKey, res.data.cryptKey.publicKey);

        alert(` ${name}さん登録成功です \n あなたのウォレットアドレス \n ${res.data.wallet.address}`);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        alert(` ${name}さん登録失敗です`);
      });
  };

  return (
    <Container>
      <h2>新規登録ページ</h2>
      <div>
        <div>名前</div>
        <input name="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <div>パスワード</div>
        <input name="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={() => submit()}>送信</button>
    </Container>
  );
};

export default SignUp;
