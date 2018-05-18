import React, { Component } from 'react';
import styled from "styled-components";
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

import {
  NoteWrapper,
  NoteTextArea,
  ButtonWrapper,
  NoteViewerWrapper,
  NoteViewer,
 } from './styled';

import { Note, Header } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          {[
            {
              path: '/',
              component: <Note />,
            },
            {
              path: '/about',
              component: <Note about/>,
            },
            {
              path: '/typing',
              component: <Note />,
            },
          ].map((v,i) => {
            return <Route key={i} exact path={v.path} render={(props) => v.component} />;
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
