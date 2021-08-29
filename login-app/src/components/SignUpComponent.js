import React from "react";
import { connect } from "react-redux";
import { signUserUp } from "../actions/userActions";

class SignUpComponent extends React.Component {
  state = {
    username: "",
    password: "",
    age: "",
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUserUp(this.state);
  };

  render() {
    return (
      <div>
        <h1>SignUp Form</h1>
        <form onSubmit={this.onSubmit}>
          <input
            id="myInput"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            id="myInput"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            id="myInput"
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleOnChange}
          />

          <br />
          <input
            id="myInput"
            type="submit"
            style={{ paddingRight: "40px" }}
            value="Login"
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpComponent);
