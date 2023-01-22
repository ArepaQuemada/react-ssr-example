import React from "react";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const GreenHeading = styled.h1`
  color: green;
  font-size: 1.5rem;
`;

export default function App() {
  return (
    <div>
      <GreenHeading>Server-Side render Example</GreenHeading>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
