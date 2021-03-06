import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e.target);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <p>Choose your username</p>
          <input
            onChange={this.onChange}
            type="text"
            value={this.props.username}
          />
          <button>Login</button>
        </form>
      </>
    );
  }
}

export default Login;
