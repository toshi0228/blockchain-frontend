import * as React from "react";
import RouteList from "routes";
import { Container } from "./style";
import { Link } from "react-router-dom";

export interface IAuthPageLayoutProps {}

const AuthPageLayout: React.FC<IAuthPageLayoutProps> = (props) => {
  return (
    <Container>
      <h1>Hello React Router</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <RouteList />
    </Container>
  );
};

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default AuthPageLayout;
