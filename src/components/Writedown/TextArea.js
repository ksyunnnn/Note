import styled, { injectGlobal } from 'styled-components';
import { Colors, FontSizes } from 'variables';

export default styled.textarea`
  ::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;
  height: 100vh;
  width: 100%;

  margin: 0;
  padding: 64px 128px;
  padding-right: 240px;

  background: none;
  border: none;
  border-radius: 0;

  line-height: 24px;
  font-size: ${FontSizes.small};
  color: #555;
  letter-spacing: 1px;

  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  resize: none;
`;
