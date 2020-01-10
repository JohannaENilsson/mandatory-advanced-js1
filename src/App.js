import React from "react";
import Chat from './chat.js';
import './chat.css';
import "./App.css";

// import Connect from "./connect.js";
import Login from './login.js';


class App extends React.Component {

  
  
  render() {
    return <div className="App"> 
    <Login/>
    <Chat />
    
    </div>
      

    
  }
}

export default App;
