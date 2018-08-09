import styled, { injectGlobal } from 'styled-components';
import { Colors } from 'variables';
import { media } from 'helpers/media-query';

import { Link } from 'react-router-dom';

injectGlobal`
  body {
    background: ${Colors.grayLight}!important;
  }
`;

export const GlobalWrapper = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  min-height: 100vh;
  max-width: 1024px;
  margin: auto;
  background: ${Colors.grayLight};
`;

export const HeaderWrapper = styled.div`
  position: fixed;
`;

export const IconButton = styled.div`
  color: #fafafa;
  background: ${Colors.writedown};
  padding: 4px 8px;
  box-shadow: 0px 0.4px 0.8px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 8px;
  :hover {
    background: ${Colors.writedownDark};
  }
`;

export const Anchor = styled(Link)`
  color: inherit;
  :hover {
    color: inherit;
  }
`;

export const WritedownWrapper = styled.div`
  ${media.phone`
    display: none;
  `}
`;

export const SpMsg = styled.div`
  display: none;
  line-height: 100vh;
  padding: 0 16px;
  ${media.phone`
    display: inherit;
  `}
`;

export const ViewWrapper = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;

  width: 320px;
  min-height: 320px;
  max-height: 94vh;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch
  word-break: break-all;
  word-wrap: break-word;
  ::-webkit-scrollbar{
      display:none;
  }

  background: ${Colors.white};
  color: ${Colors.black};
  box-shadow: 0px .4px .8px rgba(0,0,0,.25);

  padding: 16px;

  font-size: 14px;
  font-weight: 300;

  img {
    width: 100%;
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
  }

  pre {
    background: ${Colors.codeBg};
    color: ${Colors.codeFont};
    padding: 8px;
    box-shadow: 0px .4px .8px rgba(0,0,0,.25);
  }

  table {
    width: 100%;
  }

  thead {
    background: ${Colors.grayLight};
  }

  blockquote {
    border-left: 4px solid #eee;
    padding-left: 8px;
  }
`;
