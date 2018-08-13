import React, { Component, Fragment } from 'react';

import { Button, IconButton, IconImage } from 'components/StyledComponents';

export default ({ deleteCurrentValue }) => (
  <Fragment>
    <IconButton>
      <IconImage />
    </IconButton>
    <Button onClick={deleteCurrentValue}>
      <i className="fas fa-trash" />
    </Button>
  </Fragment>
);
