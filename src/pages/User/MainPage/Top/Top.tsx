import * as React from "react";

import { Container } from "./style";
import { Link } from "react-router-dom";

export interface ITopProps {}

const Top: React.FC<ITopProps> = (props) => {
  return (
    <Container>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Container>
  );
};

export default Top;
