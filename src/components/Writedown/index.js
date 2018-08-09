import React, { Component } from 'react';
import marked from 'marked';

import { WritedownWrapper } from 'components/StyledComponents';
import { Transition } from 'semantic-ui-react';

import TextArea from './TextArea';
import View from './View';

import usage from './Usage';

class Writedown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleView: false,
      inputValue: '',
    };
  }

  componentDidMount() {
    this.setState({
      inputValue: localStorage.getItem('writedown') ? localStorage.getItem('writedown') : usage,
    });
  }

  handleChange = event => {
    this.setState({
      toggleView: event.target.value.length > 0,
      inputValue: event.target.value,
    });
    localStorage.setItem('writedown', event.target.value);
  };

  render() {
    return (
      <WritedownWrapper>
        <TextArea autoFocus={true} value={this.state.inputValue} onChange={this.handleChange} />
        {this.state.inputValue && <View inputValue={this.state.inputValue} />}
      </WritedownWrapper>
    );
  }
}

export default Writedown;
