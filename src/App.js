import React from "react";
import ChatView from './chatView.js';
import CloseChat from './closeChat.js';
import SendChatMsg from './sendChatMsg.js';

import "./App.css";

// import Connect from "./connect.js";
import Login from './login.js';


class App extends React.Component {
// this.stae = {username: '', inputValue: ''}


// handleLofin
// usernamet: state.inputValue


//HandlechANGE
//inputvalue

//handleExitChat
// username: '' -> rensar 
  
  
  render() {

// login = <Login>
// chatvie = <Chat> Måste ta med username in

    return <div className="App"> 
    <Login/>
    <CloseChat />
    <ChatView />
    <SendChatMsg />
    
{/* // let valid = /^[a-z0-9? _-]{1,12}$/.test(this.state.value);
    // valid ? chatvie : login */}
    
    </div>
 
  }
}

export default App;

// i chaten
//componentWillUnmont
// sockit.off(messeges)