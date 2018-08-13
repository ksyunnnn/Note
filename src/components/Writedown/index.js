import React, { Component } from 'react';
import marked from 'marked';

import { WritedownWrapper, ToolWrapper, MessageWrapper } from 'components/StyledComponents';
import { Transition } from 'semantic-ui-react';

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

class Writedown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleView: false,
      inputValue: '',
      messageAction: {
        action: null,
        actionLabel: '',
        message: '',
      },
    };
  }

  componentDidMount() {
    this.setState({
      inputValue: handleStorage.get() ? handleStorage.get() : usage,
    });
  }

  handleChange = event => {
    this.setInputValue(event.target.value);
  };

  setInputValue = value => {
    this.setState({
      toggleView: value.length > 0,
      inputValue: value,
    });
    handleStorage.set(value);
  };

  deleteCurrentValue = () => {
    this.setState(prevState => ({
      inputValue: '',
      messageAction: {
        action: () => this.setInputValue(prevState.inputValue),
        actionLabel: '取り消し',
        message: '削除しました',
      },
    }));
    handleStorage.set('');

    // [TODO]連打した時の対策がしたい
    new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.setState({
            messageAction: null,
          }),
        );
      }, 5000);
    });
  };

  render() {
    return (
      <WritedownWrapper>
        {this.state.messageAction && (
          <MessageWrapper>
            <Message {...this.state.messageAction} />
          </MessageWrapper>
        )}
        <ToolWrapper>
          <ToolKit deleteCurrentValue={this.deleteCurrentValue} />
        </ToolWrapper>
        <TextArea autoFocus={true} value={this.state.inputValue} onChange={this.handleChange} />
        {this.state.inputValue && <View inputValue={this.state.inputValue} />}
      </WritedownWrapper>
    );
  }
}

export default Writedown;
