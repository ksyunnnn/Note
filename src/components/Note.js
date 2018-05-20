import React, { Component } from 'react';
import { Button, Icon, Transition } from 'semantic-ui-react';
import marked from 'marked';
import {
  NoteWrapper,
  NoteTextArea,
  ButtonWrapper,
  NoteViewerWrapper,
  NoteViewer,
  IconWrapper,
} from '../styled';

const aboutNoteText = `
![Lead image](https://picsum.photos/1400/200?image=180)

## Think simple, using this Note

This is simple Note. You can use Markdown like this:

## Text

<hr />

This is paragrah.

# heading1
## heading2
### heading3

*Italic*

**Bold**

~~Strikethrough~~

> Quoting text

## Lists

<hr />

* Todo
  1. item
  2. item2
* Food
  * apple
  * orange

## Link

<hr />

[I'm an inline-style link](https://www.google.com)

## Image

<hr />

![this is image](https://picsum.photos/1400/200?image=140)

## Code

<hr />

\`\`\`js
hello ()  {
    alert ( \`Hello, Note app.\` )
  }
\`\`\`

## Tables

<hr />

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

# Collaborators

[@ksyunnnn](https://twitter.com/ksyunnnn)
<br /><br /><br /><br /><br />
`;

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.about?aboutNoteText:this.props.noteRegister,
      status: this.props.about?'viewing':'typing',
      visible: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.toggleVisibility(),
      2000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value, status: 'typing'});
    if(!this.props.about)this.props.noteRegist(event.target.value);
  }

  handleSubmit = (event) => {
    clearInterval(this.timerID);

    this.setState((prevState)=>({
      status: prevState.status==='typing'?'viewing':'typing',
    }));
    event.preventDefault();
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  renderButton = () => {
    if(this.props.about) {
      return (
        <IconWrapper>
          <Transition animation='tada' duration={500} visible={this.state.visible}>
            <Icon size='huge' name='arrow right'/>
          </Transition>
          <Button circular icon='exchange' size='huge' />
        </IconWrapper>
      )
    }
    return (
      <Button circular floated='right' icon='exchange' size='huge' />
    )
  }

  render() {
    const markedValue = marked(this.state.value)
    return (
      <NoteWrapper>
        <form onSubmit={this.handleSubmit}>
          {this.state.status === 'viewing' ?
            <NoteViewerWrapper><NoteViewer dangerouslySetInnerHTML={{__html: markedValue}}></NoteViewer></NoteViewerWrapper>:
            <NoteTextArea value={this.state.value} onChange={this.handleChange} autoFocus={true} />}
          <ButtonWrapper>
            {this.renderButton()}
          </ButtonWrapper>
        </form>

      </NoteWrapper>
    );
  }
}

export default Note;
