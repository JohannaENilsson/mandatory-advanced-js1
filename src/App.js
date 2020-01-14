import React from "react";
import ChatView from "./chatView.js";
import CloseChat from "./closeChat.js";
import SendChatMsg from "./sendChatMsg.js";
import "./App.css";
import Login from "./login.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "Arne", active: false };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleLogin = this.onHandleLogin.bind(this);
    this.onHandleCloseChat = this.onHandleCloseChat.bind(this);
 
  }

  onHandleLogin(e){
    let valid = /^[0-9a-zA-Z]/.test(this.state.username);
    if(valid){
      this.setState({active: true});
      console.log('Username ok');
    } else {
      console.log('Invalid username');
    }
  }


  onHandleChange(value) {
    this.setState({ username: value });
    console.log(this.state.username);
  }
  

   onHandleCloseChat(){
     this.setState({
      //  username: '',
       active: false
     });
   }

  // username: '' -> rensar

  render() {
    

    // login = <Login>
    // ChatView = <Chat> Måste ta med username in
    let login;
    let closeChat;
    let chatView;
    let sendChatMsg;

    if (!this.state.active) {
      login = (
        <Login onChange={this.onHandleChange} 
        onSubmit={this.onHandleLogin}
          value={this.state.username} 
        />
      );
    } else {
      closeChat = <CloseChat onClick={this.onHandleCloseChat}/>;
      chatView = <ChatView onClick={this.onHandleCloseChat}/>;
      sendChatMsg = <SendChatMsg value={this.state.username} />;
    }
    return (
      <div className="App">
        {login}
        {closeChat}
        {chatView}
        {sendChatMsg}

        {this.state.username}
      </div>
    );
  }
}
//
export default App;
// {valid} ? <ChatView /> : <Login />
// i chaten
//componentWillUnmont
// sockit.off(messeges)
