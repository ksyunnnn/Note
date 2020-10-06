import React, { useEffect, useState } from 'react';

import { WritedownWrapper, ToolWrapper, MessageWrapper } from '../StyledComponents';

import TextArea from './TextArea';
import View from './View';
import ToolKit from './ToolKit';
import Message from './Message';

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
  const [toggleView, setToggleView] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const handleInputValue = (event) => setInputValue(event.target.value);

  const [messageAction, setMessageAction] = useState({
    action: null,
    actionLabel: '',
    message: '',
  });

  useEffect(() => {
    setInputValue(handleStorage.get() ? handleStorage.get() : usage);
  }, []);

  useEffect(() => {
    setToggleView(inputValue.length > 0);
    handleStorage.set(inputValue);
  }, [inputValue]);

  const deleteCurrentValue = () => {
    const prevInputValue = inputValue;
    setInputValue('');
    setMessageAction({
      action: () => setInputValue(prevInputValue),
      actionLabel: '取り消し',
      message: '削除しました',
    });
    handleStorage.set('');

    // [TODO]連打した時の対策がしたい
    // eslint-disable-next-line no-new
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          setMessageAction({
            messageAction: null,
          }),
        );
      }, 5000);
    });
  };

  return (
    <WritedownWrapper>
      {messageAction && (
      <MessageWrapper>
        <Message {...messageAction} />
      </MessageWrapper>
      )}
      <ToolWrapper>
        <ToolKit deleteCurrentValue={deleteCurrentValue} />
      </ToolWrapper>
      <TextArea autoFocus value={inputValue} onChange={handleInputValue} />
      {inputValue && <View inputValue={inputValue} />}
    </WritedownWrapper>
  );
};

export default Writedown;
