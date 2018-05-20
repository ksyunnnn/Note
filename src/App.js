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
  constructor(props) {
    super(props);

    this.state = {
      noteRegister: 'Please write something.',
    };
  }

  noteRegist = (value) => {
    this.setState({noteRegister: value});
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          {[
            {
              path: '/',
              component: <Note noteRegist={this.noteRegist} noteRegister={this.state.noteRegister}/>,
            },
            {
              path: '/usage',
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
