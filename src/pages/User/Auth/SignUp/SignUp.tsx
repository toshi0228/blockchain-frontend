import * as React from "react";

import axios from "axios";
import { Container, InputContainer } from "./style";
import { useEffect, useState, useContext } from "react";
import { User, Wallet } from "entity";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = (props) => {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const submit = async () => {
    const res = await axios.post<{ name: string; walletAddress: string }>(
      "http://localhost:4000/user",
      {
        name,
        password,
      }
    );

    if (res.status == 200) {
      new Wallet(res.data.walletAddress);
      new User(res.data.name);

      alert(
        ` ${User.userName}さん登録成功です \n あなたのウォレットアドレス \n ${Wallet.address}`
      );
      window.location.reload();
    }
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
