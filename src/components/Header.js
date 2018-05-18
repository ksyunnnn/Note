import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {
  HeaderWrapper,
  LinkWrapper,
} from '../styled';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderWrapper>
        {[
          {
            to: '/',
            label: 'Note',
          },
          {
            to: '/usage',
            label: 'Usage',
          },
        ].map((v,i)=>(
          <LinkWrapper>
            <Link
              key={i}
              to={v.to}
              style={{color: 'inherit',padding: '4px 8px'}}>
              {v.label}</Link>
          </LinkWrapper>
        ))}
      </HeaderWrapper>
    );
  }
}

export default Header;
