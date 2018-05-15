import React, { Component } from 'react';
import styled from "styled-components";
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

const Header = styled.div`
  padding: 2vh;
`;

const Root = () => {
  return (
    <p>This is Root page!</p>
  );
}

const About = () => {
  return (
    <p>This is About page!</p>
  );
}

const Contents = () => {
    return (
      <div className="content">
        <Switch>
          {[
            {
              path: '/',
              component: Root,
            },
            {
              path: '/about',
              component: About,
            },
          ].map((v,i) => {
            return <Route key={i} exact path={v.path} component={v.component} />;
          })}
        </Switch>
      </div>
    );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">

          <h1 className="App-title">React Starter</h1>
        </Header>
        <Contents />
      </div>
    );
  }
}

export default App;
