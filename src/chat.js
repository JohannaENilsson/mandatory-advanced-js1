import React from 'react';

import io from "socket.io-client"; // använd i alla filer som använder biblioteket


const socket = io('http://3.120.96.16:3000');
// när chatvyn Inmount -> connection till socket och eventlyssnarna
// får meddelande uppdat staten


class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var socket = io("http://3.120.96.16:3000");
    socket.on("connect", function() {
      console.log("Well done!");
    });

    socket.on('messages', function(data){
        console.log(data);
      }); 
  }


  render() {
    return (
      <>
        <MsgBox />
        <MyMsgBox />
      </>
    );
  }
}


class MsgBox extends React.Component{
    render(){
        return(
            <div className={'MsgBox'}>
                <span className={'userName'}>Username</span>
                <p>Här ska meddelandenna vara</p>
            </div>
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
      onChange(e){
          this.setState({content: e.target.value });
          console.log(e.target.value);
          console.log(typeof(e.target.value));
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