import React, { Component } from 'react';
import { HeaderWrapper, IconButton, Anchor } from 'components/StyledComponents';
import Icon from 'asset/icon.png';

export default () => (
  <HeaderWrapper>
    {[
      {
        to: '/',
        label: <img src={Icon} style={{ width: '24px' }} />,
      },
      // {
      //   to: '/usage',
      //   label: 'Usage'
      // }
    ].map((v, i) => (
      <Anchor to={v.to}>
        <IconButton>{v.label}</IconButton>
      </Anchor>
    ))}
  </HeaderWrapper>
);
