import React from "react";
import io from "socket.io-client";

const socket = io("http://3.120.96.16:3000");

class SendChatMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "", messageLength: false, error: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.content.trim().length !== 0) {
      if (this.state.content.length > 0 && this.state.content.length <= 200) {
        this.setState(
          socket.emit(
            "message",
            {
              username: this.props.value,
              content: this.state.content
            },
            response => {
              console.log(response);
            }
          )
        );
        this.setState({ content: "", error: "" });
      } else {
        this.setState({
          messageLength: false,
          error: "The message must not exceed 200 characters"
        });
      }
    }
  }

  onChange(e) {
    this.setState({ content: e.target.value, messageLength: true });
  }

  onKeyPress = event => {
    if (event.which === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.onSubmit(event);
    }
  };

  render() {
    let error = <p className={"error"}>{this.state.error}</p>;
    return (
      <>
        {error}
        <div className={"SendChatMsg"}>
          <form onSubmit={this.onSubmit} onKeyPress={this.onKeyPress}>
            <span>{this.props.value}</span>
            <div>
              <textarea
                type="text"
                onChange={this.onChange}
                value={this.state.content}
              ></textarea>
              <button>Send</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SendChatMsg;
