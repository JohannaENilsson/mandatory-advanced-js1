import React from 'react';
import io from "socket.io-client"; // använd i alla filer som använder biblioteket

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { value: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onChange(event) {
        this.setState({ value: event.target.value });
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
      }

    


    render(){
        return(
        <>
        <p>Choose your username</p>
        <input onChange={this.onChange} type="text" value={this.state.value} />
        <button onSubmit={ this.onSubmit }>Login</button> 
        </>
        );
    }
}

export default Login;