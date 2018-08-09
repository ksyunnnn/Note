import React, { Component } from 'react';
import marked from 'marked';

import { ViewWrapper } from 'components/StyledComponents';

export default ({ inputValue }) => (
  <ViewWrapper dangerouslySetInnerHTML={inputValue ? { __html: marked(inputValue) } : null} />
);
