import React from "react";

class CloseChat extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.props.onClick(e.target);
  }

  render() {
    return (
      <>
        <button className={"closeChat"} onClick={this.onClick}>
          X
        </button>
      </>
    );
  }
}

export default CloseChat;
