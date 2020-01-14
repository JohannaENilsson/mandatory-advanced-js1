import React from "react";
import io from "socket.io-client";

// när chatvyn Inmount -> connection till socket och eventlyssnarna
// får meddelande uppdat staten

class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onChange = this.onChange.bind(this);
    this.socket = null;
    
  }
  componentDidMount() {
    this.socket = io("http://3.120.96.16:3000");
    this.socket.on("connect", function() {
      console.log("Well done!");
    });

    this.socket.on("new_message", message => {
      let stateCopy = this.state.messages.slice(1);
      stateCopy.push(message);
      this.setState({ messages: stateCopy });
      console.log(message);
    });

    this.socket.on("messages", data => {
      this.setState({ messages: data });
      console.log(this.state);
    });
  }

  componentWillUnmount(){
    this.socket.close(this.props.onClick);
    console.log(this.socket);
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
