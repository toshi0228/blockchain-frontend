import * as React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "config";
import { Container } from "./style";

export interface ITopProps {}

const Top: React.FC<ITopProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <a onClick={() => navigate(paths.setting)}>About</a>
      </nav>
    </Container>
  );
};

export default Top;
