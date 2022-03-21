import { Component } from "react";
import "./index.css";

class LoginRoute extends Component {
  state = {
    username: "",
    password: "",
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          className="login-input-box"
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className="login-input-box"
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(options);
    const data = await response.json();
    console.log(data);
  };

  render() {
    return (
      <div className="Login">
        <form className="Rectangle-8" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1647848747/iB_HUBSlogo_ylumwl.svg"
            className="iB-HUBSlogo"
          />
          <span className="Hi-there-login Typo32DarkBlueGreyRubikRegular">
            Hi there, login
          </span>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button className="login-button" type="submit">
            Login
          </button>
          <span className="Dont-have-an-account-Signup Typo14">
            Don’t have an account?
            <span className="Typo14BrightBlueHKGroteskRegular">Signup</span>
          </span>
        </form>
      </div>
    );
  }
}
export default LoginRoute;
