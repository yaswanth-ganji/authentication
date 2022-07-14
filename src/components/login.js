import React from "react";
import cookies from "js-cookie";
import { Redirect } from "react-router-dom";
class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    error: false,
    errorMsg: "",
  };
  onInputChange = (e) => {
    this.setState({ username: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  onFormSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    console.log(userDetails);
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const res = await fetch("https://apis.ccbp.in/login", options);
    const jsonData = await res.json();
    console.log(jsonData);

    if (res.ok === true) {
      const { history } = this.props;
      cookies.set("jwt_token", jsonData.jwt_token, { expires: 30 });
      history.replace("/");
    } else {
      console.log(jsonData.error_msg);
      this.setState({ error: true, errorMsg: jsonData.error_msg });
    }
    // fetch("https://apis.ccbp.in/login", options)
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((jsonData) => {
    //     console.log(jsonData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  render() {
    const jwtToken = cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onInputChange} />
          <input type="password" onChange={this.onPasswordChange} />
          <button type="submit">Log In</button>
          {this.state.error && <p>{this.state.errorMsg}</p>}
        </form>
      </>
    );
  }
}
export default LoginForm;
