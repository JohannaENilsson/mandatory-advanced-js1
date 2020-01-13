import React from 'react';

class CloseChat extends React.Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    e.preventDefault();
    console.log('you clicked me!');

  }
  render() {
    return (
      <> <button className={'closeChat'} onChange={this.onChange}>X</button>
      </>
    );
  }
}

export default CloseChat;