import React from "react";
import "./App.css";
import { connect } from "react-redux";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import { autoLogin } from "./actions/userActions";

class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    return (
      <div className="App outer-div">
        {!this.props.userReducer.loggedIn ? (
          <h1>Sign Up or Login page !</h1>
        ) : (
          <h1>Welcome, {this.props.userReducer.user.username}</h1>
        )}
        <SignUpComponent />
        <LoginComponent />
        <button id="myInput" style={{ paddingRight: "50px" }}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
