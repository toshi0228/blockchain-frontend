import * as React from "react";
import { useState } from "react";
import * as api from "apis";
import { SignUpResponse } from "interfaces";
import { Container } from "./style";
import { User, Wallet } from "entity";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signUpUser, setSignUpUser] = useState<SignUpResponse>();

  const submit = async () => {
    await api.auth
      .signUp({ name, password })
      .then((res) => {
        setSignUpUser(res.data);

        new Wallet(signUpUser!.wallet.address);
        new User(signUpUser!.user.name, signUpUser!.cryptKey.privateKey, signUpUser!.cryptKey.publicKey);

        alert(` ${User.name}さん登録成功です \n あなたのウォレットアドレス \n ${signUpUser!.wallet.address}`);
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
