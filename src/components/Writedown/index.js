import React, { useEffect, useState } from 'react';

import { WritedownWrapper, ToolWrapper } from '../StyledComponents';

import TextArea from './TextArea';
import View from './View';
import ToolKit from './ToolKit';
import Notice, { useNotice } from './Notice';

import usage from './Usage';

const handleStorage = {
  get() {
    return localStorage.getItem('writedown');
  },
  set(value) {
    localStorage.setItem('writedown', value);
  },
};

const Writedown = () => {
  const noticeState = useNotice();

  const [inputValue, setInputValue] = useState('');
  const handleInputValue = (event) => setInputValue(event.target.value);

  useEffect(() => {
    setInputValue(handleStorage.get() ? handleStorage.get() : usage);
  }, []);

  useEffect(() => {
    handleStorage.set(inputValue);
  }, [inputValue]);

  const deleteCurrentValue = () => {
    const prevInputValue = inputValue;
    setInputValue('');

    noticeState.handleOpen({
      action: () => setInputValue(prevInputValue),
      actionLabel: '取り消し',
      message: '削除しました',
    });

    handleStorage.set('');
  };

  return (
    <WritedownWrapper>
      <ToolWrapper>
        <ToolKit deleteCurrentValue={deleteCurrentValue} />
      </ToolWrapper>
      <TextArea autoFocus value={inputValue} onChange={handleInputValue} />
      {inputValue && <View inputValue={inputValue} />}

      <Notice {...noticeState} />
    </WritedownWrapper>
  );
};

export default Writedown;
