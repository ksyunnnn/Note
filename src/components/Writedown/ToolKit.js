import React from 'react';

import { Button, IconButton, IconImage } from '../StyledComponents';

export default ({ deleteCurrentValue }) => (
  <>
    <IconButton>
      <IconImage />
    </IconButton>
    <Button onClick={deleteCurrentValue}>
      <i className="fas fa-trash" />
    </Button>
  </>
);
