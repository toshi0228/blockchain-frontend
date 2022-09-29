import * as React from "react";

import { Container } from "./style";
import { Link } from "react-router-dom";

export interface ISettingProps {}

const Setting: React.FC<ISettingProps> = (props) => {
  return (
    <Container>
      <main>
        <h2>My Page</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </Container>
  );
};

export default Setting;
