import React from "react";
import ChatView from "./chatView.js";
import CloseChat from "./closeChat.js";
import SendChatMsg from "./sendChatMsg.js";
import "./App.css";
import Login from "./login.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", active: false, error: "" };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleLogin = this.onHandleLogin.bind(this);
    this.onHandleCloseChat = this.onHandleCloseChat.bind(this);
  }

  onHandleLogin(e) {
    let valid = /^[^-\s\åäöÅÄÖ][a-zA-Z0-9-_\s]{0,12}$/.test(
      this.state.username
    );

    if (valid) {
      this.setState({ active: true, error: "" });
    } else {
      this.setState({
        error:
          "Your username must be 1-12 characters. -, _ and space is allowed."
      });
    }
  }

  onHandleChange(value) {
    this.setState({ username: value });
  }

  onHandleCloseChat() {
    this.setState({
      username: "",
      active: false
    });
  }

  render() {
    let login;
    let closeChat;
    let chatView;
    let sendChatMsg;
    let error = <p className={"error"}>{this.state.error}</p>;

    if (!this.state.active) {
      login = (
        <Login
          onChange={this.onHandleChange}
          onSubmit={this.onHandleLogin}
          value={this.state.username}
        />
      );
    } else {
      closeChat = <CloseChat onClick={this.onHandleCloseChat} />;
      chatView = <ChatView onClick={this.onHandleCloseChat} />;
      sendChatMsg = <SendChatMsg value={this.state.username} />;
    }
    return (
      <div className="App">
        {login}
        {closeChat}
        {chatView}
        {sendChatMsg}
        {error}
      </div>
    );
  }
}

export default App;
