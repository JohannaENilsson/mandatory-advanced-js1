import React from 'react';
import io from "socket.io-client";

const socket = io('http://3.120.96.16:3000');

class SendChatMsg extends React.Component{
    constructor(props){
        super(props);
        this.state = {content: '', username: '' };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState(
        socket.emit('message', {
            username: 'now',
            content: this.state.content,
        }, (response) => {
            console.log(response);
        })
        );
        this.setState({ content: '' });
        
      }

      onChange(e){
          this.setState({content: e.target.value });
      }

      onKeyPress = (event) => {
        
        if(event.which === 13){
          event.preventDefault();
          event.stopPropagation();
          this.onSubmit(event);
        }
      }

    render(){
        return(
            <div className={'SendChatMsg'}>
                <form onSubmit={this.onSubmit} onKeyPress={ this.onKeyPress}>
                <span >Username</span>
                <div>
                <textarea type='text' onChange={this.onChange} value={this.state.content} ></textarea>
                <button>Send</button>
                </div>
                </form>
            </div>
        );
    }
}

export default SendChatMsg;