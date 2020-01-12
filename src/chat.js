import React from 'react';
import io from "socket.io-client"; // använd i alla filer som använder biblioteket

const socket = io('http://3.120.96.16:3000');
// när chatvyn Inmount -> connection till socket och eventlyssnarna
// får meddelande uppdat staten


class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg: []};
  }
  componentDidMount() {
    var socket = io("http://3.120.96.16:3000");
    socket.on("connect", function() {
      console.log("Well done!");
    });
    socket.on('new_message', message => {
        console.log( message);
     }); 

     socket.on("messages", data => {
      this.setState({ msg: data });
      console.log(this.state);
      console.log(data[0].username);
    });
     
  }
  render() {
    return (
      <>
        <MsgBox msg={this.state.msg}/>
        <MyMsgBox />
      </>
    );
  }
}

class MsgBox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
 
    onChange(e){
        this.setState({content: e.target.value} );
    }
  
  render() {
    console.log(this.props.msg);
    const msgList = this.props.msg.map(msg => {
          return msg.username !== null ? (
            <div className="MsgBox" key={msg.id}>
              <span>User: {msg.username}</span>
              <div>Sent:  {msg.content}</div>
            </div>
          ) : null;
        });

    return (

    <div onChange={ this.onChange } value={ this.state}> {msgList}</div>

    );
  }
}

class MyMsgBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {content: '', username: 'pew' };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
// Kan bara submita på btn. VARFÖR inte enter?
    onSubmit(e){
        e.preventDefault();
        this.setState(
        socket.emit('message', {
            username: 'pew',
            content: this.state.content,
        }, (response) => {
            console.log(response);
        })
        );
        
      }
      // Lyssnar bara på textarean
      onChange(e){
          this.setState({content: e.target.value });
      }
    render(){
        return(
            <div className={'MyMsgBox'}>
                <form onSubmit={this.onSubmit}>
                <span >Username</span>
                <textarea type='text' onChange={this.onChange} value={this.state.content} ></textarea>
                <button>Send</button>
                </form>
            </div>
        );
    }
}


export default Chat