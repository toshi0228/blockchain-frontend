import * as React from "react";
import RouteList from "routes";
import { paths } from "config";
import { Container, UserInfoContainer } from "./style";
import { Link } from "react-router-dom";
import { Wallet, User } from "entity";
import { useEffect, useState } from "react";

export interface IAuthPageLayoutProps {}

const AuthPageLayout: React.FC<IAuthPageLayoutProps> = (props) => {
  const [isLogin, setLogin] = useState<boolean>(false);

  useEffect(() => {
    if (User.name && Wallet.address) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const logout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Container>
      <h1>Block Chain Bank</h1>

      <nav>
        <ul>
          <li>
            <Link to={paths.root}>ホーム</Link>
          </li>

          <li>
            <Link to={paths.login}>ログイン</Link>
          </li>

          <li>
            <Link to={paths.singUp}>新規登録</Link>
          </li>

          <li>
            <Link to={paths.transaction}>トランザクション確認</Link>
          </li>

          <li>
            <Link to={paths.setting}>マイページ</Link>
          </li>

          <li>
            <Link to={paths.setting} onClick={() => logout()}>
              ログアウト
            </Link>
          </li>
        </ul>
      </nav>

      <UserInfoContainer>
        <div>
          {`ログイン状態: ${Wallet.address ? "ログイン中" : "未ログイン"}`}
        </div>

        {isLogin && (
          <>
            <div>{`名前: ${User.name}`}</div>
            <div>{`ウォレットアドレス: ${Wallet.address}`}</div>
          </>
        )}
      </UserInfoContainer>

      <RouteList />
    </Container>
  );
};

export default AuthPageLayout;
