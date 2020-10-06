import React from 'react';

import styled from 'styled-components';
import { FontSizes } from '../../variables';

const MessageLabel = styled.div`
  display: inline-block;
  font-size: ${FontSizes.small};
  font-weight: 300;
  height: 40px;
  line-height: 40px;
  letter-spacing: 2px;
`;

const ActionLabel = styled.div`
  display: inline-block;
  font-size: ${FontSizes.tiny};
  font-weight: 300;
  height: 40px;
  line-height: 40px;
  margin-left: 8px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export default ({ message, action, actionLabel }) => (
  <>
    <MessageLabel>{message}</MessageLabel>
    {action && <ActionLabel onClick={action}>{actionLabel}</ActionLabel>}
  </>
);
