import React, { Component } from 'react';

import { GlobalWrapper, SpMsg } from 'components/StyledComponents';
import Header from 'components/Header';
import Writedown from 'components/Writedown';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <GlobalWrapper>
        <Header />
        <Writedown />
        <SpMsg>まだスマホに対応してません、、🙇</SpMsg>
      </GlobalWrapper>
    );
  }
}

export default App;
