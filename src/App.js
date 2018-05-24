import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Note, Header } from './components';
import { Usage, About } from './Static';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteRegister: localStorage.getItem('noteRegister')?localStorage.getItem('noteRegister'):'',
      noteRegister1: localStorage.getItem('noteRegister1')?localStorage.getItem('noteRegister1'):'',
      noteRegister2: localStorage.getItem('noteRegister2')?localStorage.getItem('noteRegister2'):'',
    };
  }

  noteRegist = value => {
    this.setState({ noteRegister: value });
    localStorage.setItem('noteRegister', value);
  };

  noteRegist1 = value => {
    this.setState({ noteRegister1: value });
    localStorage.setItem('noteRegister1', value);
  };

  noteRegist2 = value => {
    this.setState({ noteRegister2: value });
    localStorage.setItem('noteRegister2', value);
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          {[
            {
              path: '/',
              component: (
                <Note
                  noteRegist={this.noteRegist}
                  noteRegister={this.state.noteRegister}
                />
              )
            },
            {
              path: '/1',
              component: (
                <Note
                  noteRegist={this.noteRegist1}
                  noteRegister={this.state.noteRegister1}
                />
              )
            },
            {
              path: '/2',
              component: (
                <Note
                  noteRegist={this.noteRegist2}
                  noteRegister={this.state.noteRegister2}
                />
              )
            },
            {
              path: '/usage',
              component: <Note static={Usage} />
            },
            {
              path: '/about',
              component: <Note static={About} />
            }
          ].map((v, i) => {
            return (
              <Route
                key={i}
                exact
                path={v.path}
                render={props => v.component}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
