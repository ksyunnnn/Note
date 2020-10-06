import React from 'react';

import Header from './components/Header';
import Writedown from './components/Writedown';
import { GlobalWrapper, SpMsg } from './components/StyledComponents';

const App = () => (
  <GlobalWrapper>
    <Header />
    <Writedown />
    <SpMsg><span role="img" aria-label="bow">まだスマホに対応してません、、🙇</span></SpMsg>
  </GlobalWrapper>
);

export default App;
