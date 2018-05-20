import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Note, Header } from './components';
import { Usage, About } from './Static';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteRegister: ''
    };
  }

  noteRegist = value => {
    this.setState({ noteRegister: value });
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
