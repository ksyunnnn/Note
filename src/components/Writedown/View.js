import React from 'react';
import marked from 'marked';

import { ViewWrapper } from '../StyledComponents';

export default ({ inputValue }) => (
  <ViewWrapper dangerouslySetInnerHTML={inputValue ? { __html: marked(inputValue) } : null} />
);
