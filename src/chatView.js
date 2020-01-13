import React from "react";
import io from "socket.io-client";

// när chatvyn Inmount -> connection till socket och eventlyssnarna
// får meddelande uppdat staten

class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    const socket = io("http://3.120.96.16:3000");
    socket.on("connect", function() {
      console.log("Well done!");
    });

    socket.on("new_message", message => {
      let stateCopy = this.state.messages.slice(1);
      stateCopy.push(message);
      this.setState({ messages: stateCopy });
      console.log(message);
    });

    socket.on("messages", data => {
      this.setState({ messages: data });
      console.log(this.state);
    });
  }
  onChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    const msgList = this.state.messages.map(msg => {
      return msg.id !== null ? (
        <div className="MsgRow" key={msg.id}>
          <span>{msg.username} says </span>
          <div>{msg.content}</div>
        </div>
      ) : null;
    });

    return (
      <div onChange={this.onChange} value={this.state}>
        {msgList}
      </div>
    );
  }
}

export default ChatView;
