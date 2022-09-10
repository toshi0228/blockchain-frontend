import * as React from "react";
import RouteList from "routes";
import { paths } from "config";
import { Container } from "./style";
import { Link } from "react-router-dom";

export interface IAuthPageLayoutProps {}

const AuthPageLayout: React.FC<IAuthPageLayoutProps> = (props) => {
  return (
    <Container>
      <h1>Block Chain Bank</h1>
      <nav>
        <ul>
          <li>
            <Link to={paths.root}>ホーム</Link>
          </li>

          <li>
            <Link to={paths.login}>ログインページ</Link>
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
        </ul>
      </nav>

      <RouteList />
    </Container>
  );
};

export default AuthPageLayout;
