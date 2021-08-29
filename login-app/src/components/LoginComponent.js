import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import "../App.css";

class LoginComponent extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchUser(this.state);
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
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
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(LoginComponent);
