import React from 'react';
import io from "socket.io-client"; // använd i alla filer som använder biblioteket

class Login extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onChange(e) {
        this.props.onChange( e.target.value);
        console.log(e.target.value);
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(e.target);
        console.log(e.target);
      }

    
    render(){
      
        return(
        <>
        <form onSubmit={ this.onSubmit}>
        <p>Choose your username</p>
        <input onChange={this.onChange} type="text" value={this.props.username} />
        <button >Login</button> 
        </form>
        </>
        );
    }
}

export default Login;